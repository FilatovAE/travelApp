import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/Home'
import LogIn from './pages/LogIn/LogIn'
import Settings from './pages/Settings/Settings'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/travelapp/',
    element: <App />,
    children: [
      {
        path: '/travelapp/',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
