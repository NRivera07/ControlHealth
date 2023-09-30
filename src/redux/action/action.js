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
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from "../../firebase_config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase_config";

const registerUser = () => ({
  type: Register_User,

})

const registerSuccess = (user) => ({
  type: Register_Success,
  payload: user
})

const registerFailed = (error) => ({
  type: Register_Failed,
  payload: error
})


const loginStart = () => ({
  type: LOGIN_Start,

})

const loginSuccess = (user) => ({
  type: LOGIN_Success,
  payload: user
})

const loginFailed = (error) => ({
  type: LOGIN_Failed,
  payload: error
})
const logoutStart = () => ({
  type: LOGOUT_Start,

})

const logoutSuccess = () => ({
  type: LOGOUT_Success,
})

const logoutFailed = (error) => ({
  type: LOGOUT_Failed,
  payload: error
})

export const registerInitiate = (nombre, apellido, email, password) => {
  return async (dispatch) => {
    dispatch(registerUser());
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(auth.currentUser, {
        displayName: `${nombre} ${apellido}`,
      });

      //TODO: cambiar el nombre de la coleccion user a users 


      await setDoc(doc(db, 'user', user.uid), {
        uid: user.uid,
        displayName: `${nombre} ${apellido}`,
        email,
      })
      await setDoc(doc(db, 'appointments', user.uid), {
        appointments: []
      })

      dispatch(registerSuccess(user));
    } catch (error) {
      console.error("Error en el registro:", error.code, error.message);
      dispatch(registerFailed(error.message));
    }
  };
};

export const loginInitiate = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStart())
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      dispatch(loginSuccess(user));
    } catch (error) {
      console.error("Error:", error.code, error.message);
      dispatch(loginFailed(error.message));
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch(logoutStart())
    try {
      await signOut(auth)

      dispatch(logoutSuccess())
    } catch (error) {
      dispatch(logoutFailed(error))
    }
  }
}