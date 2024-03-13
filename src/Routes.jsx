import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Team from "./pages/Team";
import HowItWorks from "./pages/HowItWorks";
import Roadmap from "./pages/Roadmap";
import SneakPeek from "./pages/SneakPeek";
import Whitepaper from "./pages/Whitepaper";

const AppRoutes = () => {
  return (
    <div className="page-layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/sneak-peek" element={<SneakPeek />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;