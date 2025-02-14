import { Route, Routes } from 'react-router-dom';

import './index.css';
import { Footer, Header } from 'antd/es/layout/layout';

import SignUpForm from './assets/components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/movie" element={<Footer />} />
    </Routes>
  );
}

export default App;
