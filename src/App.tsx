import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AirpodsMax from './pages/AirpodsMax/AirpodsMax';
import Iphone from './pages/Iphone/Iphone';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AirpodsMax />} />
        <Route path="/iphone" element={<Iphone />} />
      </Routes>
    </Router>
  );
};

export default App;
