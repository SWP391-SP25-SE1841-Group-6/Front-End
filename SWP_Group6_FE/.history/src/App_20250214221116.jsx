import { Route, Routes } from 'react-router-dom';

import './index.css';
import { Header } from 'antd/es/layout/layout';
import SignUpFormV2 from './assets/components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpFormV2 />} />
      <Route path="/movie" element={<Header />} />
    </Routes>
  );
}

export default App;
