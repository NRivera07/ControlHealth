import { combineReducers } from 'redux'
import userReducer from './user'
import DoctorsReducer from './Doctor'

export default combineReducers({
    user: userReducer,
    doctors: DoctorsReducer
})
