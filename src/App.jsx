import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isAllFieldValid, setIsAllFieldValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setIsConfirmPasswordValid(confirmPassword === password);
  }, [confirmPassword, password]);

  useEffect(() => {
    setIsAllFieldValid(
      isEmailValid && isPasswordValid && isConfirmPasswordValid,
    );
  }, [isEmailValid, isPasswordValid, isConfirmPasswordValid]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isAllFieldValid) {
      alert("Form submitted successfully");
    } else {
      alert("Form cannot be submitted!");
    }
  };

  return (
    <main className="app">
      <form className="singup-form" onSubmit={handleFormSubmit} noValidate>
        <div className="input-container">
          <label htmlFor="email-feild">Email:</label>
          <input
            type="email"
            id="email-feild"
            className="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {isEmailValid ? (
            ""
          ) : (
            <p className="email-error-message error-msg">
              Invalid Email Format
            </p>
          )}
        </div>

        <div className="input-container">
          <label htmlFor="password-feild">Password:</label>
          <input
            type="password"
            id="password-feild"
            className="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {isPasswordValid ? (
            ""
          ) : (
            <p className="password-error-message error-msg">
              Password must be atleast 8 characters
            </p>
          )}
        </div>

        <div className="input-container">
          <label htmlFor="confirm-password-feild">Confirm Password:</label>
          <input
            type="password"
            className="confirm-password"
            id="confirm-password-feild"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {isConfirmPasswordValid ? (
            ""
          ) : (
            <p className="confirm-password-error-message error-msg">
              Password do not match
            </p>
          )}
        </div>

        <div className="submit-form-container">
          <input type="submit" className="form-submit" value={"Submit"} />
        </div>
      </form>
    </main>
  );
}

export default App;
