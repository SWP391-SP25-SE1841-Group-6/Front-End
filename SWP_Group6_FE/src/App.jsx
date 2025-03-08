import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hg from "./components/HomePage/hg";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import EditAccount from "./components/EditAccount/EditAccount"
// import AuthPage from "./components/Login/loginv2";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/AdminPages/AdminDashboard";
import loginwithapi from "./components/Login/LoginWithAPI";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/homepage",
      element: (
        <ProtectedRoute >
          <Hg />
        </ProtectedRoute>
      ),
    },
    {
      path: "/",
      element: <loginwithapi />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/editAccount",
      element: <EditAccount />,
    },
    {
      path: "/adminDashboard",
      element: <AdminDashboard />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
