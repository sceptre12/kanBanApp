import {CREATE_TASK} from "../../action/taskAction";
import {ADD_TASKS} from "../../action/projectActions";


export const projectMiddleware = store => next => action => {
    const result = next(action)
    // Store has been update here

    switch(action.type){
        default:
            break;
    }
    return result
}