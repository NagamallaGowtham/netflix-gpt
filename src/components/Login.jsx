import { useRef, useState } from "react";
import { formValidation } from "../utils/formValidation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessages, setErrorMessages] = useState({});
  const [authMsg, setAuthMsg] = useState("");
  const [displayName, setDisplayName] = useState("");

  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    setErrorMessages({});
    setAuthMsg("");
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = formValidation(emailRef.current.value, passwordRef.current.value);
    setErrorMessages(message);

    if (!errorMessages.length) {
      if (isSignedIn) {
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setAuthMsg("");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthMsg(errorCode);
          });
      } else {
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(userRef);
            updateProfile(auth.currentUser, {
              displayName: displayName,
              photoURL: ""
            })
              .then(() => {
                // Profile updated!
                const { uid, displayName, email, photoURL } = auth.currentUser;
                console.log(auth);
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL
                  })
                );
                setAuthMsg("");
              })
              .catch((error) => {
                // An error occurred
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthMsg(errorCode);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthMsg(errorCode);
          });
      }
    }
  };

  return (
    <div className="login-main-wrapper">
      <div className="max-w-[1440px] mx-auto relative">
        <Header />
        <div className="login-signup-form pt-25">
          <form
            className="max-w-[480px] mx-auto py-12 px-16 bg-black"
            onSubmit={handleSubmit}
          >
            <h2 className="text-[32px] text-white font-bold">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignedIn && (
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="border-2 border-gray-200 bg-gray-300 w-full p-2.5 mt-5"
                ref={userRef}
                onChange={e => setDisplayName(e.target.value)}
              />
            )}
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="border-2 border-gray-200 bg-gray-300 w-full p-2.5 mt-5"
              ref={emailRef}
            />
            {errorMessages.email && (
              <p className="text-red-600 font-medium">{errorMessages.email}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-gray-200 bg-gray-300 w-full p-2.5 mt-5"
              ref={passwordRef}
            />
            {errorMessages.password && (
              <p className="text-red-600 font-medium">
                {errorMessages.password}
              </p>
            )}
            {authMsg && (
              <p className="text-red-600 font-medium mt-7">{authMsg}</p>
            )}
            <button
              type="submit"
              className="mt-7 w-full bg-[#e50914] text-white p-2.5 cursor-pointer rounded-md hover:bg-[#c11119]"
            >
              Sign In
            </button>
            {isSignedIn ? (
              <p className="text-white font-small text-md mt-7">
                New to Netflix?{" "}
                <span
                  className="font-semibold hover:underline cursor-pointer"
                  onClick={handleSignIn}
                >
                  Sign Up now
                </span>
              </p>
            ) : (
              <p className="text-white font-small text-md mt-7">
                Already registered?{" "}
                <span
                  className="font-semibold hover:underline cursor-pointer"
                  onClick={handleSignIn}
                >
                  Sign In now
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
