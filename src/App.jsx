import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Pages/layout/MainLayout'
import Home from './Pages/Home'
import Abaut from './Pages/Abaut'
import Cantact, { loader as cantactLoader } from './Pages/Cantact'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/", // ✅ Asosiy path
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <Abaut />
        },
        {
          path: '/cantact',
          element: <Cantact />,
          loader: cantactLoader, 
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App;
