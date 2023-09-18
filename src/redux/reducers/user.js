import { 
    Register_User,
     Register_Success, 
     Register_Failed, 
     LOGIN_Start, 
     LOGIN_Success, 
     LOGIN_Failed,
     LOGOUT_Start,
     LOGOUT_Success,
     LOGOUT_Failed
    } from "../const/const";

const initialState = {
    loading: false,
    currentUser: null,
    error: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Register_User:
        case LOGIN_Start :
        case LOGOUT_Start:
            console.log("Register_User action");
            return {
                ...state,
                loading: true,
            };
        case Register_Success:
        case LOGIN_Success:
        case LOGOUT_Success:
            console.log("Register_Success action");
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };
        case Register_Failed:
        case LOGIN_Failed:
        case LOGOUT_Failed:
            console.log("Register_Failed action");
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
}

export default userReducer;