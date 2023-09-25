import { combineReducers } from 'redux'
import userReducer from './user'
import citasReducer from './citas'

export default combineReducers({
    user: userReducer,
    citas: citasReducer
})
