import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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

        <form className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/75 w-4/12 px-12 py-10 mt-14">
          <h1 className="text-white p-2 m-2 text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign UP"}
          </h1>
          <input
            type="text"
            placeholder="Email address"
            className="p-3 m-3 w-full text-white text-lg  border-[0.1px] border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder={isSignIn ? "Password" : "New Password"}
            className="p-3 m-3 w-full text-white text-lg border-[0.5px] border-gray-300 rounded"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder=" Confirm Password"
              className="p-3 m-3 w-full text-white text-lg border-[0.5px] border-gray-300 rounded"
            />
          )}

          <button
            type="submit"
            className="p-2 m-3 w-full text-white bg-red-600  text-lg"
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
