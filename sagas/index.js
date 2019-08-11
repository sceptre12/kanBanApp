import {all} from 'redux-saga/effects'

import {socketSetup} from "./socketSaga";
import {authSaga} from "./authSaga";

export default function* rootSaga(){
    yield all([
        socketSetup(),
        authSaga()
    ])
}