import { createContext, useContext, useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getRoleBasedPath = (role) => {
    switch(role) {
      case 'Manager':
        return '/admin';
      case 'Student':
        return '/studenthome';
      case 'Psychologist':
        return '/psychologist';
      case 'Parent':
        return '/parent';
      default:
        return '/';
    }
  };

  const login = async (email, password) => {
    try {     
      const response = await axios.post(
        `http://localhost:5121/api/Account/Login?email=${email}&password=${password}`
      );
      
      if (response.data) {
        // Store user data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userName', response.data.user.name);
        localStorage.setItem('userEmail', response.data.user.email);
        localStorage.setItem('role', response.data.user.role);

        setIsAuthenticated(true);

        return { 
          success: true, 
          role: response.data.user.role,
          redirectPath: getRoleBasedPath(response.data.user.role)
        };
      }
      return { success: false };

    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("An error occurred during login. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      console.error('Login error:', error.response || error);
      return { success: false };
    }
  };

  const logout = () => {
    const userRole = localStorage.getItem('role');
    const redirectPath = getRoleBasedPath(userRole);
    
    localStorage.clear();
    setIsAuthenticated(false);
    
    toast.info("Logged out successfully", {
      position: "top-right",
      autoClose: 3000,
    });
    
    window.location.href = redirectPath;
  };

  return (
    <AuthContext.Provider value={{ 
      login, 
      logout, 
      isAuthenticated,
      getRoleBasedPath
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
