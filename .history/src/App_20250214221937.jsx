import { Route, Routes } from 'react-router-dom';

import './index.css';


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
