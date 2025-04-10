import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';


{/*
const ProtectedRoute = ({ children, ...rest }) => {
 let auth = localStorage.getItem('token');
 const Roles = ['Manager', 'Psychologist', 'Student'];
 let role = localStorage.getItem('role');

 {/*
 if (!auth){
  return <Navigate to="/login" />;
 }else if(role === 'Manager'){
  return <Navigate to="/admin" />;
 }else if(role === 'Psychologist'){
  return <Navigate to="/psychologist" />;
 }else if(role === 'Student'){
  return <Navigate to="/studenthome" />;
 }
 
  return (   
       auth ? <Outlet /> : <Navigate to="/login" />
  );
};*/}


const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const auth = localStorage.getItem('token');
  
    return (
      <Route {...rest} render={(props) => {
        if (!user) {
          return <Redirect to='/login' />;
        }
  
        if (roles && !roles.includes(user.role)) {
          return <Redirect to='/' />;
        }
  
        return <Component {...props} />;
      }} />
    );
  };
  

export default ProtectedRoute;