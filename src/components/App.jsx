import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/:userId/*" element={<Home />} />
    </Routes>
  )
}
export default App
