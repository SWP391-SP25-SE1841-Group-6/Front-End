import { Route, Routes } from 'react-router-dom';
import './index.css';
import SignUpForm from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
