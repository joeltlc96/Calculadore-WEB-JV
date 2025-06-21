import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/HomePage';
import SumaPage from './pages/SumaPage';
import RestaPage from './pages/RestaPage';
import DivisionPage from './pages/DivisionPage';
import MultiplicacionPage from './pages/MultiplicacionPage';

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/home', element: <HomePage/>},
  {path: '/suma', element: <SumaPage/>},
  {path: '/resta', element: <RestaPage/>},
  {path: '/division', element: <DivisionPage/>},
  {path: '/multiplicacion', element: <MultiplicacionPage/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);