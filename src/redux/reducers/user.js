import { Register_User, Register_Succes, Register_Failed } from "../const/const";

const initialState = {
    loading: false,
    currentUser: null,
    error: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Register_User:
            console.log("Register_User action");
            return {
                ...state,
                loading: true,
            };
        case Register_Succes:
            console.log("Register_Succes action");
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };
        case Register_Failed:
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