import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, HashRouter as Router, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Roulette } from "./screens/Roulette/Roulette";
import { SlotMachine } from "./screens/SlotMachine/SlotMachine";
import { SlotMachineSeven } from "./screens/SlotMachineSeven/SlotMachineSeven";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/roulette" element={<Roulette/>} />
        <Route path="/slots" element={<SlotMachine/>} />
        <Route path="/slotsseven" element={<SlotMachineSeven/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
