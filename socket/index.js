import socketIo from 'socket.io-client'

let _Socket = null


const setupSocketConnection = (port) =>{
    _Socket = socketIo(`http://172.30.21.136:${port}`)
}

const getSocket = () => _Socket

const Socket = {
    setupSocketConnection,
    getSocket
}

export default Socket
