import { Register_User, Register_Succes, Register_Failed } from "../const/const";
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth'
import { auth } from "../../firebase_config";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase_config";

const registerUser = () => ({
  type: Register_User,

})

const registerSucces = (user) => ({
  type: Register_Succes,
  payload: user
})

const registerFailed = (error) => ({
  type: Register_Failed,
  payload: error
})

export const registerInitiate = (nombre, email, password) => {
  return async (dispatch) => {
    dispatch(registerUser());
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(auth.currentUser,{
        displayName: nombre,
      });
      await setDoc(doc(db, 'user', user.uid),{
        uid: user.uid,
        displayName: nombre,
        email,
      })

      dispatch(registerSucces(user));
    } catch (error) {
      console.error("Error en el registro:", error.code, error.message);
      dispatch(registerFailed(error.message));
    }
  };
};