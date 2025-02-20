import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hg from "./components/HomePage/hg";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
// import AuthPage from "./components/Login/loginv2";
import Login from "./components/Login/Login";


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
