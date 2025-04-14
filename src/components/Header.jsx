import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 w-screen h-16  bg-gradient-to-b from-black flex justify-between items-center ">
      <img className="w-33 h-12 m-10 " src={LOGO} alt="logo" />
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
