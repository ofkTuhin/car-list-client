import { useAuth } from "context/AuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";
import loginClass from "styles/login.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // contex call

  const { signIn } = useAuth();
  //  history
  const history = useNavigate();
  const handeleSubmit = async (e) => {
    e.preventDefault();
    // validataion

    try {
      setLoading(true);
      setError("");
      await signIn(email, password);
      history("/");
    } catch (errors) {
      setLoading(false);
      setError("faild to sign in");
    }
  };
  return (
    <Form className={loginClass.login} onSubmit={handeleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="text"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <CheckBox
        text=" I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />
      <Button type="submit">
        <span>Sign in</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account?{" "}
        <Link to="/signup">
          <a>Sign up</a>
        </Link>{" "}
        instead.
      </div>
    </Form>
  );
};

export default LoginForm;
