import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidSignInData, checkValidSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

import { LOGIN_BG_POSTER } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const handleButtonClick = () => {
    if (isSignIn) {
      const message = checkValidSignInData(
        email.current.value,
        password.current.value
      );

      setErrorMessage(message);
    } else {
      const message = checkValidSignUpData(
        email.current.value,
        password.current.value,
        confirmPassword.current.value
      );
      setErrorMessage(message);
    }
    if (errorMessage) return;
    //Sign in /Sign Up logic

    if (!isSignIn) {
      //SignUp Logic
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
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  name: user.displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Signup error:", errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("user signed in");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <img
          className="bg-gradient-to-b from-black bg-no-repeat bg-cover w-full h-screen object-cover"
          src={LOGIN_BG_POSTER}
          alt="background poster"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute md:top-2/5 top-65 left-50 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/75 md:w-4/12 w-4/6 md:px-12 px-7 md:py-10 py-5 md:mt-14 mt-5"
        >
          <h1 className="text-white m-2 md:p-2 md:m-2 md:text-2xl text-lg font-bold">
            {isSignIn ? "Sign In" : "Sign UP"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="User Name"
              className="md:p-3 md:m-3 m-2 p-1 w-full text-white md:text-lg text-sm border-[0.1px] border-gray-300 rounded"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="md:p-3 md:m-3 m-2 p-1 w-full text-white md:text-lg text-sm border-[0.1px] border-gray-300 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder={isSignIn ? "Password" : "New Password"}
            className="md:p-3 md:m-3 m-2 p-1 w-full text-white md:text-lg text-sm border-[0.1px] border-gray-300 rounded"
          />
          {!isSignIn && (
            <input
              ref={confirmPassword}
              type="password"
              placeholder=" Confirm Password"
              className="md:p-3 md:m-3 m-2 p-1 w-full text-white md:text-lg text-sm border-[0.1px] border-gray-300 rounded"
            />
          )}
          <p className="text-red-500 md:text-md md:m-3 text-sm m-3">
            {errorMessage}
          </p>
          <button
            onClick={handleButtonClick}
            type="submit"
            className="md:p-2 p-1 m-2 md:m-3 w-full text-white bg-red-600  md:text-lg text-sm cursor-pointer"
          >
            {isSignIn ? "Sign In" : "Sign UP"}
          </button>
          <p className="md:p-2 md:m-4 p-1 m-2 w-full text-white cursor-pointer">
            {isSignIn ? "New to netflix?  " : "Already a member?"}
            <span className="font-bold" onClick={toggleSignIn}>
              {isSignIn ? "Sign Up Now" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
