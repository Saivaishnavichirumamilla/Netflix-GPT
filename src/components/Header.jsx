import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 w-screen h-16 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-33 h-12 m-10 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="mr-6 m-3 ">
        {user && (
          <div className="flex gap-4 items-center">
            <div className="text-white text-lg cursor-pointer">
              {user?.name}
            </div>

            <div>
              <button
                onClick={handleSignOut}
                className="text-red-600 font-bold text-lg hover:text-white focus-within:text-white "
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
