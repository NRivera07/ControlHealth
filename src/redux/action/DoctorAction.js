import { GET_DOCTORS, COMPLETED_GET_DOCTORS, FAILED_COMPLETED_GET_DOCTORS } from "../const/const";
import { getDocs ,collection} from "firebase/firestore";
import { db } from "../../firebase_config";

const getDoctors = () => ({
  type: GET_DOCTORS,
});

const successGetDoctors = (doctors) => ({
  type: COMPLETED_GET_DOCTORS,
  payload: doctors,
});

const failedGetDoctors = (error) => ({
  type: FAILED_COMPLETED_GET_DOCTORS,
  payload: error,
});

export const GetDoctors = () => {
  return async (dispatch) => {
    dispatch(getDoctors());
    try {
        const doctorsCollectionRef = collection(db, "doctors"); 
        const querySnapshot = await getDocs(doctorsCollectionRef);
  
        const doctorsData = [];
        querySnapshot.forEach((doc) => {
          doctorsData.push({ id: doc.id, ...doc.data() });
        });
        
        dispatch(successGetDoctors(doctorsData));

    } catch (error) {
      console.error("Error:", error.code, error.message);
      dispatch(failedGetDoctors(error.message));
    }
  };
};
