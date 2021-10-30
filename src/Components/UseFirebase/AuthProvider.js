import React, { createContext } from "react";
import useFirebase from "./UseFirebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const contextAll = useFirebase();
  /* Here i am using auth context */
  return (
    <AuthContext.Provider value={contextAll}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
