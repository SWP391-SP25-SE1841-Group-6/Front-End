// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Dashboard from "./components/HomePage/DashBoard";
// import "./index.css";
// import Hg from "./components/Home/HomePage";
// import IntroPage from "./components/HomePage/IntroPage";
// import ConTact from "./components/HomePage/Contact";
// import Home from "./components/HomePage/Home";
// import { Login } from "./components/Login/Login";
// // import HomeStudent from "./components/Home/HomeStudent";

// // import HomePageStudent from "./components/HomePage/HomePageStudent";
// import { AuthProvider } from "./components/Auth/AuthContext";
// import Profile from "./components/Student/Profile";
// import HomeStudent from "./components/Home/HomeStudent";

// function App() {
//   const router = createBrowserRouter([
//     // Route chính cho các trang sử dụng layout Hg
//     {
//       path: "/",
//       element: <Hg />,
//       children: [
//         {
//           index: true, // Route mặc định cho "/"
//           element: <IntroPage />,
//         },
//         {
//           path: "/home",
//           element: <Home />,
//         },
//         {
//           path: "/contact",
//           element: <ConTact />,
//         },
//         {
//           path: "/dashboard",
//           element: <Dashboard />,
//         },
//         // {
//         //   path: "/homestudent",
//         //   element: <HomeStudent />,
//         // },
//         // {
//         //   path: "/studenthome",
//         //   element: <HomePageStudent />,
//         // },
//         // {
//         //   path: "/profile",
//         //   element: <Profile />,
//         // },

//       ],
//     },

//     {
//       path: "/home",
//       element: <Home />,
//       children: [
//         // {
//         //   index: true, // Route mặc định cho "/homestudent"
//         //   element: <Hg />,
//         // },
//         {
//           path: "student",
//           element: <HomeStudent />,
//         },
//         {
//           path: "profile",
//           element: <Profile />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />, // Login không dùng layout Hg
//     },
//   ]);
//     // Route riêng cho trang Login (không sử dụng layout Hg)

//   return (
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   );
// }

// export default App;
import { RouterProvider, createBrowserRouter, BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import "./index.css";
import Hg from "./components/Home/HomePage";
import Home from "./components/HomePage/Home";

import HomeStudent from "./components/Home/HomeStudent";
import { AuthProvider } from "./components/Auth/AuthContext";
import Profile from "./components/Student/Profile";
import TimeTable from "./components/Student/TimeTable";
import Tlieu from "./components/Student/TLieu";
import Skxh from "./components/Student/ProgramSick/Skxh";
import IntroPageStudent from "./components/Student/IntroPageStudent/IntroPageStudent";
import HomePageStudent from "./components/HomePage/HomePageStudent";
import Sknt from "./components/Student/ProgramSick/Sknt";
import Skcx from "./components/Student/ProgramSick/Skcx";
import Sktc from "./components/Student/ProgramSick/Sktc";
import Meet from "./components/Student/ProgramSick/Meet";
import Khaosat from "./components/Student/ProgramSick/Khaosat";
import Callkc from "./components/Student/ProgramSick/Callkc";
import TestProgramcp from "./components/Student/ProgramSick/TestProgramcopy";
import Register from "./components/Login/Register";
import AdminDashboard from "./components/AdminPages/AdminDashboard";
import { ChakraBaseProvider } from "@chakra-ui/react";
import LoginWithAPI from "./components/Login/LoginWithAPI";
import PsyDashboard from "./components/PsychologistPages/PsyDashboard";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import AccountsCRUD from "./components/AdminPages/AccountsCRUD";
import TestsCRUD from "./components/AdminPages/TestsCRUD";
import TestDetails from "./components/TestDetails";
import TestCreate from "./components/AdminPages/TestCreate";
import AddQuestions from "./components/AdminPages/AddQuestions";
import ResultScreen from "./components/Student/ProgramSick/ResultScreen";
import QuestionCRUD from "./components/AdminPages/QuestionCRUD";
//import { ThemeProvider } from "@mui/material";
function App() {

  
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Hg />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },

    {
      path: "/studenthome",
      element: <HomeStudent />,
      children: [
        {
          index: true,
          element: <IntroPageStudent />,
        },
        {
          path: "/studenthome/profile",
          element: <Profile />,
        },
        {
          path: "/studenthome/timetable",
          element: <TimeTable />,
        },
        {
          path: "/studenthome/tailieu",
          element: <Tlieu />,
        },

        {
          path: "/studenthome/Sknt",
          element: <Sknt />,
        },
        {
          path: "/studenthome/Skxh",
          element: <Skxh />,
        },
        {
          path: "/studenthome/Skcx",
          element: <Skcx />,
        },
        {
          path: "/studenthome/Sktc",
          element: <Sktc />,
        },
        {
          path: "/studenthome/test",
          element: <TestProgramcp />,
        },
        {
          path: "/studenthome/hengap",
          element: <Meet />,
        },
        {
          path: "/studenthome/khaosat",
          element: <Khaosat />,
        },

        {
          path: "/studenthome/khancap",
          element: <Callkc />,
        },
        {
          path: "/studenthome/homepagestudent",
          element: <HomePageStudent />,
        },
        {
          path: "/studenthome/test-history",
          element: <ResultScreen />,
        },
      ],
    },

    // Route riêng cho trang Login (không sử dụng layout nào)
    {
      path: "/login",
      element: <LoginWithAPI />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
      roles: ["Manager"],
    },
    {
      path: "/admin/accounts",
      element: <AccountsCRUD />,
      roles: ["Manager"],
    },
    {
      path: "/admin/tests",
      element: <TestsCRUD />,
      roles: ["Manager"],
    },
    {
      path: "/admin/tests/:id",
      element: <TestDetails />,
      roles: ["Manager"],
    },
    {
      path: "/admin/tests/create",
      element: <TestCreate />,
      roles: ["Manager"],
    },
    {
      path: "/admin/tests/add-questions/:id",
      element: <AddQuestions />,
      roles: ["Manager"],
    },

    {
      path: "/admin/questions",
      element: <QuestionCRUD/>,
      roles: ["Manager"],
    },

    {
      path: "/psychologist",
      element: <PsyDashboard />,
    }
    
  ]);
  



  return (
  
    
    <AuthProvider>
      {/*}
      <Router>
        <Routes>
          <Route path="/" element={<Hg />} >
              <Route path="/" index:true element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginWithAPI />} />
          <Route path="/register" element={<Register />} />
         <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard />} roles={["Manager"]}/>
            <Route path="/psychologist" element={<PsyDashboard />} roles={["Psychologist"]}/>
            <Route path="/studenthome" element={<HomePageStudent />} roles={["Student"]}>
              <Route path="/studenthome" index:true element={<IntroPageStudent />} />
              <Route path="/studenthome/profile" element={<Profile />} />
              <Route path="/studenthome/timetable" element={<TimeTable />} />
              <Route path="/studenthome/tailieu" element={<Tlieu />} />
              <Route path="/studenthome/Sknt" element={<Sknt />} />
              <Route path="/studenthome/Skxh" element={<Skxh />} />
              <Route path="/studenthome/Skcx" element={<Skcx />} />
              <Route path="/studenthome/Sktc" element={<Sktc />} />
              <Route path="/studenthome/test" element={<TestProgramcp />} />  
              <Route path="/studenthome/hengap" element={<Meet />} />
              <Route path="/studenthome/khaosat" element={<Khaosat />} />
              <Route path="/studenthome/khancap" element={<Callkc />} />
              <Route path="/studenthome/homepagestudent" element={<HomePageStudent />} />
            </Route>
         </Route>
        </Routes>
      </Router> */}
      <RouterProvider router={router} />
    </AuthProvider>
 
  );
}

export default App;
