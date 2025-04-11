import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidSignInData, checkValidSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="background poster"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/75 w-4/12 px-12 py-10 mt-14"
        >
          <h1 className="text-white p-2 m-2 text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign UP"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="p-3 m-3 w-full text-white text-lg  border-[0.1px] border-gray-300 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder={isSignIn ? "Password" : "New Password"}
            className="p-3 m-3 w-full text-white text-lg border-[0.5px] border-gray-300 rounded"
          />
          {!isSignIn && (
            <input
              ref={confirmPassword}
              type="password"
              placeholder=" Confirm Password"
              className="p-3 m-3 w-full text-white text-lg border-[0.5px] border-gray-300 rounded"
            />
          )}
          <p className="text-red-500 text-md m-3">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            type="submit"
            className="p-2 m-3 w-full text-white bg-red-600  text-lg cursor-pointer"
          >
            {isSignIn ? "Sign In" : "Sign UP"}
          </button>
          <p className="p-2 m-4 w-full text-white cursor-pointer">
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
