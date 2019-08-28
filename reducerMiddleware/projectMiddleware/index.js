import {CREATE_TASK} from "../../action/taskAction";
import {ADD_TASKS} from "../../action/projectActions";


export const projectMiddleware = store => next => action => {
    const result = next(action)
    // Store has been update here

    switch(action.type){
        case CREATE_TASK:
            if(action.projectId){
                const {tasks} = store.getState()
                next({type: ADD_TASKS, projectId: action.projectId, tasks: [tasks[action.task.id]] })
            }
        default:
            break;
    }
    return result
}