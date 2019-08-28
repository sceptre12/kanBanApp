import StateTree from '../store/stateTree'

import {SOCKET_CONNECTED} from "../action/socketActions";

export default(state=StateTree.socketConnection, action ) =>{
    switch(action.type){
        case SOCKET_CONNECTED: {
            return {
                ...state,
                isConnected: true,
                connectedHost: action.host
            }
        }
        default:
            return state
    }
}