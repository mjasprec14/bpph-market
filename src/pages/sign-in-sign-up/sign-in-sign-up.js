import React from "react";
import "./sign-in-sign-up.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInSignUp = () => (
  <section className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </section>
);

export default SignInSignUp;
