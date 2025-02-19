

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import AuthPage from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage"; 



function App () {
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
      element: <AuthPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;



