import { useAuth } from "context/AuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // contex call

  const { signUp } = useAuth();
  //  history
  const history = useNavigate();
  const handeleSubmit = async (e) => {
    e.preventDefault();
    // validataion
    if (password !== confirmpassword) {
      return setError("password don't match");
    }
    try {
      setLoading(true);
      setError("");
      await signUp(email, password, username);
      history("/");
    } catch (errors) {
      setLoading(false);
      setError(errors);
    }
  };
  return (
    <Form style={{ height: "500px" }} onSubmit={handeleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
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
      <TextInput
        type="text"
        placeholder="Confirm Password"
        icon="lock_clock"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <CheckBox
        text=" I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />
      <Button type="submit" disable={loading}>
        {" "}
        <span>Submit now</span>
      </Button>
      {/* {error && <p className="error">{error}</p>} */}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
