import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './screens/Home/Home';
import { Roulette } from './screens/Roulette/Roulette';

const router = createBrowserRouter([
  {
    path: "/CASINO-PROJ/",
    element: <Home/>,
  },
  {
    path: "/CASINO-PROJ/roulette",
    element: <Roulette/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
