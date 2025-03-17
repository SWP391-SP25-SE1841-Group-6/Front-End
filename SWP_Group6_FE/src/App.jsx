import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hg from "./components/HomePage/hg";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import EditAccount from "./components/EditAccount/EditAccount"
// import AuthPage from "./components/Login/loginv2";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/AdminPages/AdminDashboard";
import LoginWithAPI from "./components/Login/LoginWithAPI";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Draft from "./components/Draft/draft";
import AccountsCRUD from "./components/AdminPages/AccountsCRUD" ; 

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
      element: <LoginWithAPI />,
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
    {
      path: '/test',
      element: <Draft />,
    },
    {
      path: '/Accounts',
      element: <AccountsCRUD />,
    }

  ]);

  return (
    <ChakraBaseProvider>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  )
}

export default App;
