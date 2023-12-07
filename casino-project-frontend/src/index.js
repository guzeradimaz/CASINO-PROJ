import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Home} from "./screens/Home/Home";
import {Roulette} from "./screens/Roulette/Roulette";
import {SlotMachine} from "./screens/SlotMachine/SlotMachine";
import {Login} from "./screens/Login/Login";
import {store} from './app/store'
import {Provider} from 'react-redux'
import {NoPage} from "./screens/NoPage/NoPage";
import {Balance} from "./screens/Balance/Balance";
import {Admin} from "./screens/Admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/roulette" element={<Roulette/>}/>
                    <Route path="/slots" element={<SlotMachine item1={'7'} item2={'🍌'} item3={'🔥'} item4={'🤡'}/>}/>
                    <Route path="/slotsseven" element={<SlotMachine item1={'😁'} item2={'🚀'} item3={'🚕'} item4={'⌛'}/>}/>
                    <Route path="/balance" element={<Balance/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
