// import { createBrowserRouter,  RouterProvider,  } from 'react-router-dom';
// import './index.css';
// import Hp from './components/HomePage/hg';
// import Dashboard from './components/HomePage/DashBoard';
// import InforLecture from './components/HomePage/InforLecture';
// import Banner from './components/HomePage/Banner';

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Hp />,
//       children: [
//         {
//           path: "/home",
//           element: <Banner />,
//         },
//         // {
//         //   path: "detail/:id", //slug
//         //   element: <Detail />,
//         // },
//         {
//           path: "dashboard",
//           element: <Dashboard />,
//         },
//         {
//           path: "contact",
//           element: <InforLecture />,
//         },
      
//       ],
//     },
//   ]);

//   return (
//     <RouterProvider router={router} />
//   );
// }




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
}

export default App;
