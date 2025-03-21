// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from 'react';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  
  
  var email = String;
  var password = String;
  

  const login = async (email , password) => {
    console.log('auth context: ' + email, password);
    try {     
      const response = await axios.post(
        'http://localhost:5121/api/Account/Login?email='+email+'&password='+password
      );
      
      console.log('message '+ response.data.message);
      console.log('token ' + response.data.token);
      console.log('id ' + response.data.user.id);
      console.log('email ' + response.data.user.email);
      console.log('user name ' + response.data.user.name);
      console.log('role ' + response.data.user.role);
      
      if(response.data){
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('role', response.data.user.role);
      }

      

        toast.success("Login Success ! Welcome back " + localStorage.getItem('name'), {
          position: "top-right"
        });
      
      

    } catch (error) {
      toast.error("Login Failed ! Please re-check your login credentials !" , {
        position: "top-right"
      });
      console.error('Login error:', error);
    } finally {
      
    }
  };

  const logout = () => {
    localStorage.clear(); // erase everything when
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
