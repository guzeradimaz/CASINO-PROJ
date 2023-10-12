import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, HashRouter as Router, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Roulette } from "./screens/Roulette/Roulette";
import { SlotMachine } from "./screens/SlotMachine/SlotMachine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/roulette" element={<Roulette/>} />
        <Route path="/slots" element={<SlotMachine/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
