import { createContext, useContext } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";
import React, { useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);
  useEffect(() => {
    onUserStateChange((user) => {
      setIsLoading(false);
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
