import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userLoginReducer, userRegisterReducer } from './Reducers/userReducers'

const reducer = combineReducers({
    loginReducer : userLoginReducer,
    registerReducer : userRegisterReducer
})
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
(localStorage.getItem('userInfo')):null

const initialState = {
     userLogin:{
          userInfo: userInfoFromStorage
     }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
