import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import CrewPage from "../CrewPage/CrewPage";
import DestinationPage from "../DestinataionPage/DestinationPage";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import TechPage from "../TechPage/TechPage";

import DestinationMoon from "../DestinataionPage/DestinationMoon";
import DestinationMars from "../DestinataionPage/DestinationMars";
import DestinationEuropa from "../DestinataionPage/DestinationEuropa";
import DestinationTitan from "../DestinataionPage/DestinationTitan";

import CrewDouglas from "../CrewPage/CrewDouglas";
import CrewMark from "../CrewPage/CrewMark";
import CrewViktor from "../CrewPage/CrewViktor";
import CrewAnoushen from "../CrewPage/CrewAnoushen";

import "./App.scss";
import TechCapsule from "../TechPage/TechCapsule";
import TechLaunch from "../TechPage/TechLaunch";
import TechSpaceport from "../TechPage/TechSpaceport";

const App = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />}>
          <Route path="" element={<Navigate to="moon" />} />
          <Route path="moon" element={<DestinationMoon />} />
          <Route path="mars" element={<DestinationMars />} />
          <Route path="europa" element={<DestinationEuropa />} />
          <Route path="titan" element={<DestinationTitan />} />
        </Route>
        <Route path="/crew" element={<CrewPage />}>
          <Route path="" element={<Navigate to="douglas" />} />
          <Route path="douglas" element={<CrewDouglas />} />
          <Route path="mark" element={<CrewMark />} />
          <Route path="viktor" element={<CrewViktor />} />
          <Route path="anoushen" element={<CrewAnoushen />} />
        </Route>
        <Route path="/technology" element={<TechPage />}>
          <Route path="" element={<Navigate to="launch" />} />
          <Route path="launch" element={<TechLaunch />} />
          <Route path="capsule" element={<TechCapsule />} />
          <Route path="spaceport" element={<TechSpaceport />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
