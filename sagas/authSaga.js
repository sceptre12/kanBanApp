import {takeEvery,call} from 'redux-saga/effects'

import NavigationService from '../navigation/util/navigationService'

import {SIGN_USER_IN} from "../action/authenticationAction";
import {MAIN_VIEW} from "../constants/navigation";


const handleSignIn = function* (){
    yield call(NavigationService.navigate,MAIN_VIEW)
}



export const authSaga = function*(){
    yield takeEvery(SIGN_USER_IN,handleSignIn)
}