<<<<<<< HEAD

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";


function App() {
  const router = createBrowserRouter([
    {
      path: "/homepage",
      element: (
        <ProtectedRoute >
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
=======
import { Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import { FormLogin } from './components/Login/FormLogin';



function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
>>>>>>> 21fdeb15b961b0735fb22e8ff5962ddb58019ba2
}

export default App;
