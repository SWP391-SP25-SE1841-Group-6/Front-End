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
}

export default App;
