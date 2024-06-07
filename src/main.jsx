import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import MobileHeader from './components/mobileHeader.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='' element={<MobileHeader/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
)
