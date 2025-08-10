import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import profileImg from '../assets/netflix_profile_icon.jpg'
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { selectLanguage } from "../utils/langSlice";

const Header = () => {
  const checkUser = useSelector((store) => store.user);
  const viewGptSearch = useSelector(store => store.gpt.showGptSearch)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearch())
  }

  const handleLangSelect = (e) => {
    dispatch(selectLanguage(e.target.value))
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              const { uid, displayName, email, photoURL } = user;
              dispatch(
                  addUser({
                      uid: uid,
                      displayName: displayName,
                      email: email,
                      photoURL: photoURL
                  })
              );
              navigate("/browse")
          } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
          }
      });

      return () => unsubscribe();
  }, []);
  return (
    <header className="py-6 px-12 bg-gradient-to-b from-black fixed top-0 left-0 right-0 z-40">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center">
        <div className="logo">
          <svg
            className="logo-img"
            viewBox="0 0 111 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
          >
            <g>
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </g>
          </svg>
        </div>
        {checkUser && (
          <div className="user flex items-center gap-4.5">
            {viewGptSearch && (
              <select className="p-2 bg-gray-900 text-white" name="language" id="lang-select" onChange={handleLangSelect}>
                {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>
            )}
            <button className="py-2 px-4 bg-purple-800 text-white rounded-lg cursor-pointer" onClick={handleGptSearch}>{viewGptSearch ? "Home Page" : "GPT Search"}</button>
            <div className="profile flex items-center gap-2">
              <img src={profileImg} className="w-[40px] h-[40px]" alt={checkUser.displayName} />
              <button className="text-white font-semibold cursor-pointer" onClick={handleSignout}>
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
