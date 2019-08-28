import {LAUNCH_CREATE_PROJECT, LAUNCH_PROJECT_VIEW} from "../../action/navigation";
import NavigationService from '../../navigation/util/navigationService'
import {CREATE_PROJECT_VIEW, PROJECTS_VIEW,PROJECT_VIEW} from '../../constants/navigation'
import {CREATE_PROJECT} from "../../action/projectActions";


export const navigationMiddleware = store => next => action => {
    const result = next(action)

    switch(action.type){
        case LAUNCH_CREATE_PROJECT:
            NavigationService.navigate(CREATE_PROJECT_VIEW)
            break;
        case CREATE_PROJECT:
            NavigationService.navigate(PROJECTS_VIEW)
            break;
        case LAUNCH_PROJECT_VIEW:
            NavigationService.navigate(PROJECT_VIEW,{projectId: action.projectId})
        default:
            break;
    }

    return result
}