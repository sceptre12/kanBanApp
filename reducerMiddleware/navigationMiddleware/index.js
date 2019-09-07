import NavigationService from '../../navigation/util/navigationService'
import {LAUNCH_CREATE_PROJECT, LAUNCH_PROJECT_VIEW, LAUNCH_CREATE_TASK, LAUNCH_TASK_VIEW} from "../../action/navigation";
import {CREATE_PROJECT_VIEW, PROJECTS_VIEW,PROJECT_VIEW,CREATE_TASK_VIEW,TASK_VIEW} from '../../constants/navigation'
import {CREATE_PROJECT} from "../../action/projectActions";
import {CREATE_TASK} from "../../action/taskAction";


export const navigationMiddleware = store => next => action => {
    const result = next(action)

    switch(action.type){
        case LAUNCH_CREATE_PROJECT:
            NavigationService.navigate(CREATE_PROJECT_VIEW)
            break;
        case CREATE_PROJECT:
            NavigationService.goBack()
            break;
        case LAUNCH_PROJECT_VIEW:
            NavigationService.navigate(PROJECT_VIEW,{projectId: action.projectId})
            break;
        case LAUNCH_CREATE_TASK:
            NavigationService.navigate(CREATE_TASK_VIEW, {addTaskFunc: action.addTaskFunc})
            break;
        case CREATE_TASK:
            NavigationService.goBack()
            break;
        case LAUNCH_TASK_VIEW:
            NavigationService.navigate(TASK_VIEW, {taskId: action.taskId})
        default:
            break;
    }

    return result
}