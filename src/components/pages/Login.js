import React from "react";

import Illustration from "../Illustration";
import illustrarion from "assets/images/login.svg";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="collumn">
        <Illustration illustration={illustrarion} img="hi" />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
