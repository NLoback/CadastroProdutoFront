
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import { Register } from '../pages/Register';


const OtherRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default OtherRoutes;