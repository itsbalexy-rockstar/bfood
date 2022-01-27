import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const RoutesBFood = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
};

export default RoutesBFood;
