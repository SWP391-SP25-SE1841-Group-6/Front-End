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
}// import { createBrowserRouter,  RouterProvider,  } from 'react-router-dom';
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


import Hg from "./components/HomePage/hg";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/HomePage/DashBoard";
import AuthPage from "./components/Login/loginv2";


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



