import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Stats from "../pages/Stats";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
};

export default MainRoutes;
