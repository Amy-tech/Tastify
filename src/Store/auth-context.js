import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  displayName: "",
  isLoggedIn: false,
  login: (token, displayName) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [displayName, setDisplayName] = useState();

  const userIsLoggedIn = !!token;

  const userLoginHandler = (token, displayName) => {
    setToken(token);
    setDisplayName(displayName);
  };
  const userLogoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    displayName: displayName,
    isLoggedIn: userIsLoggedIn,
    login: userLoginHandler,
    logout: userLogoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
