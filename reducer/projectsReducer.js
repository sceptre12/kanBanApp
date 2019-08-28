import StateTree from "../store/stateTree";
import {ADD_TASKS, CREATE_PROJECT} from "../action/projectActions";

export default (state=StateTree.projects,action) =>{
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                [action.project.id]: action.project
            }
        case ADD_TASKS:
            return {
                ...state,
                [action.projectId]: {
                    ...state[action.projectId],
                    tasks: state[action.projectId].tasks.concat(action.tasks)
                }
            }
        default:
            return state
    }
}