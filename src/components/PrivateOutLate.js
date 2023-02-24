import { useAuth } from "context/AuthContext";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateOutLate = () => {
  const { user } = useAuth();
  console.log(user);
  return user.length ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutLate;
