import StateTree from "../store/stateTree";
import {CREATE_TASK} from "../action/taskAction";

export default (state=StateTree.projects,action) =>{
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                [action.task.id]: {
                    ...action.task,
                    projectId: action.projectId
                }
            }
        default:
            return state
    }
}