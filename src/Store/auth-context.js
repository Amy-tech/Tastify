// import React, { useContext, createContext, useState } from "react";

// REMEMBER WE IMPORTED AUTH FOR FORGOT PASSWORD
// import { auth } from "../utils/init-firebase";
// import { sendPasswordResetEmail } from "firebase/auth";

// const AuthContext = createContext({
//   token: "",
//   displayName: "",
//   currentUser: null,
//   isLoggedIn: false,
//   forgotPasword: () => Promise,
//   login: (token, displayName) => {},
//   logout: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// export const AuthContextProvider = (props) => {
//   const [token, setToken] = useState(null);
//   const [displayName, setDisplayName] = useState();
//   const [currentUser, setCurrentUser] = useState(null);

//   const userIsLoggedIn = !!token;

//   // LOGIN HANDLER FUNCTION
//   const userLoginHandler = (token, displayName) => {
//     setToken(token);
//     setDisplayName(displayName);
//   };

//   // FORGOT PASSWORD HANDLER FUNCTION
//   const forgotPassword = (email) => {
//     return sendPasswordResetEmail(auth, email, {
//       url: "http://localhost:3000/login",
//     });
//   };

//   // LOGOUT HANDLER FUNCTION
//   const userLogoutHandler = () => {
//     setToken(null);
//   };

//   const contextValue = {
//     token: token,
//     displayName: displayName,
//     currentUser: currentUser,
//     isLoggedIn: userIsLoggedIn,
//     login: userLoginHandler,
//     logout: userLogoutHandler,
//     forgotPasword: forgotPassword,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
