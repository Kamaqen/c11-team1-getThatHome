import { useState, useEffect } from "react";

const useAuth = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
  const [userRole, setUserRole] = useState(sessionStorage.getItem("userRole"));

  useEffect(() => {
    // Initialize user data when the component mounts
    setUserId(sessionStorage.getItem("userId"));
    setUserRole(sessionStorage.getItem("userRole"));
  }, []);

  const updateUser = (newUserId) => {
    setUserId(newUserId);
  };

  const updateRole = (newUserRole) => {
    setUserRole(newUserRole);
  };

  const logoutUser = () => {
    // Clear user data when logging out
    localStorage.clear();
    setUserId(null);
    setUserRole(null);
  };

  return { userId, userRole, updateUser, updateRole, logoutUser };
};

export default useAuth;
