import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase";

import "./sign-up.scss";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = currentUser;

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setCurrentUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setError(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <section className="sign-up">
      <h2 className="sign-up--title">I do not have a account</h2>
      <span className="sign-up--subtitle">
        Sign up with your email and password
      </span>

      {error && <p className="invalid-password">{error}</p>}

      <form className="sign-up__form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={currentUser.displayName}
          label="Display Name"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={currentUser.email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={currentUser.password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={currentUser.confirmPassword}
          label="Confirm password"
          handleChange={handleChange}
          required
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </section>
  );
};

export default SignUp;
