import React, { useState } from "react";
import Link from "next/link";

const topMessage = "Signup Please...";
const emailProps = {
  label: "Your Email",
  placeHolder: "example@example.com",
  required: true,
};
const passwordProps = {
  label: "Your Password",
  placeHolder: "Enter your password",
  required: true,
  confirmMessage: "Confirm Password",
  confirmPlaceHolder: "Repeat above password",
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6 || password.length > 10) {
      setPasswordError("Password length must be between 6 and 10");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords did not match");
      return;
    }
    // { Implement your form submit handler here. You are free to modify error handling }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleOnFocus = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  return (
    <div className="flex flex-row justify-center items-center w-screen min-h-screen bg-gray-900 h-screen">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-start justify-center bg-gray-700 p-5 space-y-4 shadow-2xl rounded-md w-4/5 md:w-1/5"
      >
        <h2 className="text-2xl text-white font-bold">{topMessage}</h2>
        {emailError || passwordError || confirmPasswordError ? (
          <p className="bg-red-100 p-2 w-full text-red-900 border-red-300 border-2 rounded">
            {emailError} {passwordError} {confirmPasswordError}
          </p>
        ) : null}
        <label className="text-xl text-white font-semibold" htmlFor="email">
          {emailProps.label}
        </label>
        <input
          onFocus={handleOnFocus}
          value={email}
          className="outline-green-300 p-2 bg-gray-400 w-full text-white placeholder:text-gray-600 w-full"
          required={emailProps.required}
          placeholder={emailProps.placeHolder}
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="text-xl text-white font-semibold" htmlFor="password">
          {passwordProps.label}
        </label>
        <input
          onFocus={handleOnFocus}
          value={password}
          className="outline-green-300 p-2 bg-gray-400 w-full text-white placeholder:text-gray-600 w-full"
          required={passwordProps.required}
          placeholder={passwordProps.placeHolder}
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label className="text-xl text-white font-semibold" htmlFor="confirmPassword">
          {passwordProps.confirmMessage}
        </label>
        <input
          onFocus={handleOnFocus}
          value={confirmPassword}
          className="outline-green-300 p-2 bg-gray-400 w-full text-white placeholder:text-gray-600 w-full"
          required={passwordProps.required}
          placeholder={passwordProps.placeHolder}
          type="password"
          id="confirmPassword"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <input
          className="bg-green-300 p-1 w-1/2 hover:bg-green-500 rounded hover:shadow-lg"
          type="submit"
          value="Signup"
        />
        <Link href="/signin">
          <a className="text-green-300 text-sm cursor-pointer">
            Already have an account ? sign in
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
