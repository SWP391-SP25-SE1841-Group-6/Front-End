import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import './index.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/homepage",
      element: (
        <ProtectedRoute>
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
}

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import './index.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/homepage",
      element: (
        <ProtectedRoute>
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
}

export default App;