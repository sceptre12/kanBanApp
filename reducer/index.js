import {combineReducers} from "redux";
import socketConnection from "./socketConnectionReducer";
import authentication from "./authenticationReducer";
import projects from './projectsReducer'
import tasks from './tasksReducer'
import qrScanner from "./qrScannerReducer";

const rootReducer = combineReducers({
    socketConnection,
    authentication,
    qrScanner,
    projects,
    tasks
})

export default rootReducer