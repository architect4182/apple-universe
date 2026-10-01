import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AirpodsMax from './pages/AirpodsMax/AirpodsMax';
import Iphone from './pages/Iphone/Iphone';
import Home from './pages/Home/Home';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airpods" element={<AirpodsMax />} />
        <Route path="/iphone" element={<Iphone />} />
      </Routes>
    </Router>
  );
};

export default App;
