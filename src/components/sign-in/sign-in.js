import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import "./sign-in.scss";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = credentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1 className="sign-in--title">I already have an account</h1>
      <span className="sign-in--subtitle">
        Sign in with your email and password
      </span>

      {error && <p className="invalid-password">{error}</p>}

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={credentials.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          value={credentials.password}
          handleChange={handleChange}
          required
        />

        <div className="sign-in__buttons-container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            <FcGoogle className="google-icon" /> Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
