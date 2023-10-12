import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './screens/Home/Home';
import { Roulette } from './screens/Roulette/Roulette';
import { SlotMachine } from './screens/SlotMachine/SlotMachine';

const router = createHashRouter([
  {
    path: "/CASINO-PROJ/",
    element: <Home/>,
  },
  {
    path: "/CASINO-PROJ/roulette",
    element: <Roulette/>,
  },
  {
    path: "/CASINO-PROJ/slots",
    element: <SlotMachine/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
