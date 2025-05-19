import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { Supported_Languages } from "../utils/constants";
import language from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleOnChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
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
    <div className="fixed top-0 w-full z-10 md:w-screen h-16  bg-gradient-to-b from-black flex justify-between items-center ">
      <img
        className="md:w-33 md:h-12 md:m-10 w-24 h-8 m-5"
        src={LOGO}
        alt="logo"
      />
      <div className="md:mr-6 md:m-3 mr-3 m-2 ">
        {user && (
          <div className="flex items-center gap-2 md:gap-4 md:items-center">
            {gptSearch && (
              <select
                onChange={handleOnChange}
                className="bg-white font-bold text-black outline-none text-sm py-0 h-5 w-17 rounded-xl md:w-22 md:h-8 md:text-md md:py-1 md:m-2 md:px-2 md:rounded-xl cursor-pointer"
              >
                {Supported_Languages.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.value}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGPTSearch}
              className="bg-purple-600 m-1 text-sm px-2 text-white md:px-4 md:font-medium md:py-1 md:m-2 rounded-lg cursor-pointer hover:border-white hover:border-2 focus-within:border-white focus-within:border-2"
            >
              {gptSearch ? "Home" : "Ask GPT"}
            </button>
            <div className="flex-col items-center md:flex justify-center ">
              <div className="text-white md:text-lg md:cursor-pointer text-sm">
                {user?.name}
              </div>

              <div>
                <button
                  onClick={handleSignOut}
                  className="text-red-600 ml-2 font-bold md:text-lg text-sm hover:text-white focus-within:text-white "
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
