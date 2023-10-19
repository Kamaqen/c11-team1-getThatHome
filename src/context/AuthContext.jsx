// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import apiFetch from "../services/api-fetch";
import { tokenKey } from "../config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [idUser, setIdUser] = useState(sessionStorage.getItem("userId"));
  const [role, setRole] = useState(sessionStorage.getItem("userRole"));

  function login(credentials) {
    return apiFetch("/login", { body: credentials }).then((u) => {
      const { token, ...user } = u;
      sessionStorage.setItem(tokenKey, token);
      sessionStorage.setItem("userId", user.id);
      sessionStorage.setItem("userRole", user.role);
      setIdUser(sessionStorage.getItem("userId"));
      setRole(sessionStorage.getItem("userRole"));
      return user;
    });
  }

  function logout() {
    return apiFetch("/logout", { method: "GET" }).then(() => {
      sessionStorage.clear();
      localStorage.clear();
    });
  }

  return (
    <AuthContext.Provider value={{ idUser, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
