import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignUpPage />}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
    </Routes>
  )
}

export default App
