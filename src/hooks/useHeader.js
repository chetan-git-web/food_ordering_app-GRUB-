import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from 'react';
const useHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      const authRemoval = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName, email, uid } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        } else {
          dispatch(removeUser());
        }
      });
      return () => authRemoval();
    }, [])
}


export default useHeader;