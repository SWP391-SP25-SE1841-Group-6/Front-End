import { Route, Routes } from 'react-router-dom';

import './index.css';


import SignUpForm from './assets/components/Login/Login';
import Footer from './assets/components/Footer/Footer';
import HomePage from './assets/components/HomePage/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
