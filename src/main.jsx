import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Comp/Home'
import About from './Comp/About'
import Contact from './Comp/Contact'
import GitHub from './Comp/GitHub'
import User from './Comp/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
         path: "about",
         element: <About />
      },
      {
         path: "contact",
         element: <Contact />
      },
      {
        path: "github",
        element: <GitHub />
      },
      {
        
        path: "user",
        element: <User />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
