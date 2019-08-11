import {combineReducers} from "redux";
import socketConnection from "./socketConnectionReducer";
import authentication from "./authenticationReducer";
import projects from './projectsReducer'
import tasks from './tasksReducer'

const rootReducer = combineReducers({
    socketConnection,
    authentication,
    projects,
    tasks
})

export default rootReducer