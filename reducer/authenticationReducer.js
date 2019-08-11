import StateTree from "../store/stateTree";
import {SIGN_USER_IN} from "../action/authenticationAction";


export default (state=StateTree.authentication, action) => {
    switch (action.type) {
        case SIGN_USER_IN:
            return {
                ...state,
                isAuthenticated: true,
                username: action.username
            }
        default:
            return state
    }
}
