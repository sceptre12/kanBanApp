import {createStore,applyMiddleware} from "redux";
import createSagaMiddleWare from 'redux-saga'

import StateTree from './stateTree'
import rootReducer from "../reducer";
import rootSaga from '../sagas'

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(rootReducer,StateTree,applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store