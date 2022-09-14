import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { config } from "../../config/firebase-config";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

initializeApp(config.firebaseConfig);

const auth = getAuth();

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email1, setSignUpEmail] = useState("");
  const [password1, setSignUpPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [signupFailed, setSignupFailed] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    sendPasswordResetEmail(auth, email)
      .then((response) => {
        window.alert("Email sent");
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  const handleGoogleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const { user } = result;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { errorEmail } = error.customData;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        // eslint-disable-next-line no-promise-executor-return
        await new Promise<void>((done) => setTimeout(() => done(), 3000));
        navigate("/");
      })
      .catch((error) => {
        setLoginFailed(true);
      });
  };

  const forgotPassword = () => {
    navigate("/forgotPassword");
  };

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email1, password1)
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        setSignupFailed(true);
      });
  };
  return (
    <div className="w-full max-w-md m-auto  text-white shadow-default py-10 px-1">
      <div className="text-primary m-6">
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            SIGN IN
          </h1>
        </div>
        <form>
          <label htmlFor="sign-in-email" className="text-left">
            Email:
            <input
              id="sign-in-email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-black border outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </label>
          <label htmlFor="sign-in-password">
            Password:
            <input
              id="sign-in-password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 text-black border outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </label>
        </form>
        <div className="flex items-center mt-3 justify-center">
          <button
            type="button"
            className="bg-white py-2 px-8 text-md text-blue-700 rounded border border-blue focus:outline-none focus:border-black"
            value="SignIn"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
        </div>
        <br />
        {loginFailed && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p className="font-bold">Login Failed</p>
            <p>Please check your login credentials.</p>
          </div>
        )}
        <div className="flex items-center mt-3 justify-center">
          <button
            type="button"
            onClick={forgotPassword}
            className="justify-center text-white hover:underline"
          >
            I&apos;ve forgotten my password
          </button>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            OR sign in with
          </h1>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <button type="button" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </button>
          <button type="button" className="pl-10 pr-10">
            <FontAwesomeIcon icon={faApple} size="2x" />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </button>
        </div>
        <br />
        <div className="grid divide-y-[3px] divide-white">
          <div />
          <div />
        </div>
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            SIGN UP
          </h1>
        </div>
        <form>
          <label htmlFor="sign-up-email" className="text-left">
            Email:
            <input
              id="sign-up-email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setSignUpEmail(e.target.value)}
              className="w-full p-2 text-black border outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </label>
          <label htmlFor="sign-up-password">
            Password:
            <input
              id="sign-up-password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              className="w-full p-2 text-black border outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </label>
        </form>
        <div>
          <div className="flex items-center mt-3 justify-center">
            {signupFailed && (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                role="alert"
              >
                <p className="font-bold">Sign Up Failed</p>
                <p>Please check your details.</p>
                <p>Have a valid email address.</p>
                <p>Password must include:</p>
                <ol>
                  <li>8 characters</li>
                  <li>A digit (0-9)</li>
                </ol>
              </div>
            )}
          </div>
          <div className="flex items-center mt-3 justify-center">
            <button
              type="button"
              className="bg-white py-2 px-8 text-md text-blue-700 rounded border border-blue focus:outline-none focus:border-black"
              value="SignUp"
              onClick={handleSignUp}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoggedInSignInPage = () => (
  <div className="loggedInSignIn flex items-center mt-3 justify-center">
    <div
      className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
      role="alert"
    >
      <p className="font-bold">Login Success</p>
      <p>You have successfully logged in!</p>
    </div>
  </div>
);

const App = () => {
  const [currentUser, setUser] = useState<Auth["currentUser"] | null>(null);
  useEffect(() => auth.onAuthStateChanged((user) => {
    setUser(user);
  }));

  return currentUser ? <LoggedInSignInPage /> : <SignIn />;
};

export default App;
