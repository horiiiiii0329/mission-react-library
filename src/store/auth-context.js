import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  name: "",
  login: (token) => {},
  logout: () => {},
  setName: (name) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [name, setName] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const setNameHandler = (name) => {
    setName(name);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    name: name,
    login: loginHandler,
    logout: logoutHandler,
    setName: setNameHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
