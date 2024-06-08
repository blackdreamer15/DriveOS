"use client";
import { createContext, useState } from "react";
// import axios from "axios";
// import getBaseUrl from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
    
  const signIn = async (data) => {
    try {
    //   const res = await axios.post(`${getBaseUrl()}/provider/auth`,data);
      if (res.data.success) {
        setUser(res.data.provider);
        setIsAuthenticated(true);
        setToken(res.data.token);
        return {
          success: true,
          message: 'Login successful'
        };
      } else {
        return {
          success: false,
          message: res.data.message
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'An error occured while trying to login'
      };
    }
  };

  

  const logOut = () => {
    setUser({});
    setIsAuthenticated(false);
    setToken("");
  };


  const register = async (data) => {
    try {
      // const res = await axios.post(`${getBaseUrl()}/provider`, data);
  
      if (res.data.success) {
        setUser(res.data.provider);
        setIsAuthenticated(true);
        setToken(res.data.token);
  
        console.log("Registration successful:", res);
        // return Promise.resolve({
        return {
          success: true,
          message: 'Registration successful'
        };
      } else {
        console.log("Registration failed:", res);
        // return Promise.resolve({
        return {
          success: false,
          message: res.data.message
        };
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      // return Promise.reject({
      return {
        success: false,
        message: 'An error occurred while trying to create your account'
      };
    }
  };



  return (
      <AuthContext.Provider value={{ isAuthenticated, signIn, token, user, register, logOut }}>
              
      {children}
    </AuthContext.Provider>
  );
}

