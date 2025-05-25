import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
const defaultUserStatus = {
  Authen: false,
  token: "",
  data: []
};

export const UserProvider = ({ children }) => {
  
  const getInitialUser = () => {
    const userFromStorage = localStorage.getItem("user");
    try {
      const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : defaultUserStatus;
      return parsedUser;
    } catch (error) {
      return defaultUserStatus;
    }
  };
  const [User, setUser] = useState(() => getInitialUser());

  const login = async (userData, token) => {
    const newUser = {
      Authen: true,
      token: token,
      data: userData
    };
    setUser(newUser);
    setTimeout(() => {
      localStorage.setItem("User", JSON.stringify(newUser));
    }, 100);
  };

  const logout = async () => {
    setUser(defaultUserStatus);
    localStorage.removeItem("User");
  };
  
  return (
    <UserContext.Provider value={{ User, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};