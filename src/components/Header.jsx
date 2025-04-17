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
    <div className="absolute z-10 w-screen h-16  bg-gradient-to-b from-black flex justify-between items-center ">
      <img className="w-33 h-12 m-10 " src={LOGO} alt="logo" />
      <div className="mr-6 m-3 ">
        {user && (
          <div className="flex gap-4 items-center">
            {gptSearch && (
              <select
                onChange={handleOnChange}
                className="bg-white font-bold text-black outline-none text-md py-1 m-2 px-2 rounded-xl"
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
              className="bg-purple-600 text-white px-4 font-medium py-1 m-2 rounded-lg cursor-pointer hover:border-white hover:border-2 focus-within:border-white focus-within:border-2"
            >
              {gptSearch ? "Home" : "Ask GPT"}
            </button>
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
