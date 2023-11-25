import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./screens/Home/Home";
import {Roulette} from "./screens/Roulette/Roulette";
import {SlotMachine} from "./screens/SlotMachine/SlotMachine";
import {SlotMachineSeven} from "./screens/SlotMachineSeven/SlotMachineSeven";
import {Login} from "./screens/Login/Login";
import {store} from './app/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router basename="/">
                <Routes>
                    <Route index element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/roulette" element={<Roulette/>}/>
                    <Route path="/slots" element={<SlotMachine/>}/>
                    <Route path="/slotsseven" element={<SlotMachineSeven/>}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);
