import { Route, Routes } from 'react-router-dom';

import './index.css';
import { Header } from 'antd/es/layout/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/movie" element={<Header />} />
    </Routes>
  );
}

export default App;
