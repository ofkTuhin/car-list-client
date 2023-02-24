import { useAuth } from "context/AuthContext";
import React from "react";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return <>Home</>;
};

export default Home;
