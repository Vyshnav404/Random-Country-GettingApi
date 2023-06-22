import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'
import PrivateRoutes from './utils/PrivateRoutes'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      {/* <Route path='/falls' element={<LoginPage/>}></Route> */}
      <Route path='/signup' element={<SignUpPage />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<PrivateRoutes> <HomePage/> </PrivateRoutes>}></Route>
    </Routes>
  )
}

export default App
