// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Pages/layout/MainLayout';
import Home from './Pages/Home';
import Abaut from './Pages/Abaut';
import Cantact, { loader as contactLoader } from './Pages/Cantact';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <Abaut />
        },
        {
          path: 'cantact',
          element: <Cantact />,
          loader: contactLoader
        }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
