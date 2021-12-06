import { createStore, combineReducers } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import SignIn from './login'
import LogOut from './logout'
import TASK from './task'

const reducers = combineReducers({ SignIn, LogOut, TASK })

const store= ()=> {
    return createStore(reducers, composeWithDevTools());
}

export default store();