import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CrewPage from "../CrewPage/CrewPage";
import DestinationPage from "../DestinataionPage/DestinationPage";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import TechPage from "../TechPage/TechPage";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
