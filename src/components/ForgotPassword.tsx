import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { config } from "../config/firebase-config";

initializeApp(config.firebaseConfig);

const auth = getAuth();

function refreshPage() {
  window.location.reload();
}

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [forgotPasswordFailed, setForgotPasswordFailed] = useState(false);
  const [forgotPasswordSuccess, setForgotPasswordSucess] = useState(false);

  const handleForgotPassword = async () => {
    sendPasswordResetEmail(auth, email)
      .then(async () => {
        setForgotPasswordSucess(true);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise<void>((done) => setTimeout(() => done(), 2000));
        refreshPage();
      })
      .catch(async (error) => {
        setForgotPasswordFailed(true);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise<void>((done) => setTimeout(() => done(), 3000));
        refreshPage();
      });
  };

  return (
    <div className="w-full max-w-md m-auto  text-white shadow-default py-10 px-1">
      <div className="text-primary m-6">
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            Lets find your account.
          </h1>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <h1 className="justify-center text-white">
            Whats your email address?
          </h1>
        </div>
        <form>
          <label htmlFor="email" className="text-left">
            Email:
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-black border outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </label>
        </form>
        <div className="flex items-center mt-3 justify-center">
          <div>
            {forgotPasswordFailed && (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                role="alert"
              >
                <p className="font-bold">No Email Found</p>
                <p>Unable to find email within database.</p>
              </div>
            )}
          </div>
          <div>
            {forgotPasswordSuccess && (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                role="alert"
              >
                <p className="font-bold">Email Found</p>
                <p>Follow the instructions sent to your email.</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <button
            type="button"
            className="bg-white py-2 px-8 text-md text-blue-700 rounded border border-blue focus:outline-none focus:border-black"
            value="SignIn"
            onClick={handleForgotPassword}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
