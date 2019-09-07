import {createStore,applyMiddleware} from "redux";
import createSagaMiddleWare from 'redux-saga'

import StateTree from './stateTree'
import rootReducer from "../reducer";
import {navigationMiddleware} from '../reducerMiddleware/navigationMiddleware'
import {projectMiddleware} from '../reducerMiddleware/projectMiddleware'
import rootSaga from '../sagas'
import {socketHandlerMiddleware} from "../reducerMiddleware/socketHandlerMiddleware";

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(rootReducer,StateTree,applyMiddleware(navigationMiddleware,projectMiddleware,socketHandlerMiddleware,sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store