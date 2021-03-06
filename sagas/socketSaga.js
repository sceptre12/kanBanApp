import {fork, take , call , cancel ,put,select} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import socketIo from 'socket.io-client'

import {DEVICE_CONNECTED,CONNECTION_ESTABLISHED,CLOSING_CONNECTION} from '../constants/message_headers'

import {
    SETUP_SOCKET_CONNECTION,
    UPDATE_DEVICE_INFO,
    SEND_MESSAGE,
    CLOSE_CONNECTION,
    SOCKET_CONNECTED
} from '../action/socketActions'

const getStateProjectsAndTasks = state => ({projects: state.projects, tasks: state.tasks})

const connect = (host) =>{
    const socket = socketIo(`http://${host}`)
    return new Promise(resolve => {
        socket.on('connect', ()=>{
            console.log("HERE HERE ")
            resolve(socket)
        })
    })
}

const subscribe = (socket)=>{
    return eventChannel(emit =>{
        socket.on(DEVICE_CONNECTED, ({device_info}) =>{
            emit({type: UPDATE_DEVICE_INFO, device_info})
        })

        return () => {}
    })
}

const read = function* (socket){
    const channel = yield call(subscribe,socket)
    while(true){
        let action = yield take(channel)
        yield put({...action})
    }
}

const write = function* (socket){
    // This allows continuous writes to occur whenever the send message action gets called
    while(true){
        const {data, channel} = yield take(SEND_MESSAGE)
        socket.emit(channel,data)
    }
}


const handleIO = function* (socket){
    yield fork(read,socket)
    yield fork(write,socket)
}


const flow = function* (){
    try {
        // This is inside of a while loop be cause its possible to close and open the connection
        while(true){
            console.log("AND WE PAUSE")
            const {host} = yield take(SETUP_SOCKET_CONNECTION)
            console.log("NOW HERE ")
            const socket = yield call(connect,host)
            console.log("HEREEE")
            const {tasks, projects} = yield select(getStateProjectsAndTasks)
            console.log("REACH")
            socket.emit(CONNECTION_ESTABLISHED,{ data: {tasks,projects}})
            yield put({type: SOCKET_CONNECTED, host})

            const task = yield fork(handleIO, socket)

            let action = yield take(CLOSE_CONNECTION)

            yield cancel(task)

            socket.emit(CLOSING_CONNECTION)
        }
    }catch(err){
        console.log(err)
    }
}



export const socketSetup = function* (){
    yield fork(flow)
}