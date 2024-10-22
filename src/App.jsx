import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Header/>
     <Outlet/>
     <ToastContainer/>
    </div>
  )
}

export default App
