import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import Axios from "../lib/axios";
// initial value of a user
const initialState = {
  isAuthenticated: false,
  user: null,
};

// reducer fuction for login and logout
const authReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
  }
};
// context creation
const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  // read user information
  const getUserInfo = async () => {
    // read token from local storage
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      try {
        const res = await Axios.get("user", {
          headers: {
            authorize: `Bearer ${token}`,
          },
        });
        console.log(res);
        if (res.status === 200) {
          dispatch({
            type: "LOGIN",
            payload: {
              user: res.data.user,
            },
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // verify user on reducer state init or changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!state.user) {
      getUserInfo();
    }
  }, [state]);

  // user login
  const signIn = async (email, password) => {
    try {
      const res = await Axios.post(`/user/login`, {
        headers: { "Content-Type": "application/json" },
        email,
        password,
      });

      //set token on localstorage
      localStorage.setItem("token", res.data.token);
      await getUserInfo();
    } catch (err) {
      console.error(err);
    }
  };
  // user rgistation
  const signUp = async (email, password, name) => {
    console.log(email);
    try {
      const res = await Axios.post(`/user/`, {
        name,
        email,
        password,
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error(err);
    }
  };
  // user logout
  const signOut = async () => {
    try {
      // remove token from localStorage
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
    } catch (err) {
      console.error(err);
    }
  };
  console.log(state);
  const contextData = {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    signIn,
    signUp,
    signOut,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
