import React from "react";

import Illustration from "../Illustration";
import illustration from "assets/images/signup.svg";
import SignupForm from "../SignupForm";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="collumn">
        <Illustration illustration={illustration} />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
