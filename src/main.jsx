import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Genre from './Components/Genre.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import NoPage from './Components/NoPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='genre' element={<Genre/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
