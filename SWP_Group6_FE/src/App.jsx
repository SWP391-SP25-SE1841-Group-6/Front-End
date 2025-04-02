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
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Hg />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginWithAPI />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Admin routes */}
          <Route element={<ProtectedRoute allowedRoles={['Manager']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/accounts" element={<AccountsCRUD />} />
            <Route path="/admin/tests" element={<TestsCRUD />} />
            <Route path="/admin/tests/:id" element={<TestDetails />} />
            <Route path="/admin/tests/create" element={<TestCreate />} />
            <Route path="/admin/tests/add-questions/:id" element={<AddQuestions />} />
            <Route path="/admin/questions" element={<QuestionCRUD />} />
          </Route>

          {/* Protected Psychologist routes */}
          <Route element={<ProtectedRoute allowedRoles={['Psychologist']} />}>
            <Route path="/psychologist" element={<PsyDashboard />} />
          </Route>

          {/* Protected Student routes */}
          <Route element={<ProtectedRoute allowedRoles={['Student']} />}>
            <Route path="/studenthome" element={<Hg />}>
              <Route index element={<IntroPageStudent />} />
              <Route path="profile" element={<Profile />} />
              <Route path="timetable" element={<TimeTable />} />
              <Route path="tailieu" element={<Tlieu />} />
              <Route path="Sknt" element={<Sknt />} />
              <Route path="Skxh" element={<Skxh />} />
              <Route path="Skcx" element={<Skcx />} />
              <Route path="Sktc" element={<Sktc />} />
              <Route path="test" element={<TestProgramcp />} />
              <Route path="hengap" element={<Meet />} />
              <Route path="khaosat" element={<Khaosat />} />
              <Route path="khancap" element={<Callkc />} />
              <Route path="test-history" element={<ResultScreen />} />
              <Route path="homepagestudent" element={<HomePageStudent />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
