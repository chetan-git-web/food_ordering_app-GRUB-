import {  useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { validateUser } from "../utils/validare";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Loginpage = () => {
  const user = useSelector((store) => store.user);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [showerror, setshowerror] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const onclicklistener = () => {
    const error = validateUser(email.current.value, password.current.value);

    setshowerror(error);

    if (error) {
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { displayName, email, uid } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setshowerror(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { displayName, email, uid } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" smartphone:w-[390px]  absolute p-12 bg-gray-200  my-[3rem]  desktop:my-[4rem] mx-[40rem] smartphone:mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
    >
      <h1 className="font-bold text-2xl smartphone:text-3xl py-1 smartphone:py-4 text-gray-700 mb-3">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignInForm && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 smartphone:p-4 my-4 w-full bg-gray-100 text-black outline-none"
        />
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email Address"
        className=" p-2 smartphone:p-4 my-4 w-full bg-gray-100 text-black outline-none"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-2 smartphone:p-4 my-4 w-full bg-gray-100 text-black outline-none"
      />
      <p className="font-bold text-red-600">{showerror}</p>
      <button
        className=" p-2 smartphone:p-4 my-6 bg-red-700 w-full rounded-lg"
        onClick={() => {
          onclicklistener();
        }}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p
        className="py-4 cursor-pointer text-gray-700"
        onClick={toggleSignInForm}
      >
        {isSignInForm
          ? "New to Netflix? Sign Up Now"
          : "Already registered? Sign In Now."}
      </p>
    </form>
  );
};
export default Loginpage;
