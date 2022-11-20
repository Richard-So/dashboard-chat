import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import useToken from '../hooks/useToken'

function App() {
  const { token, setToken } = useToken()
  const [signUp, setSignUp] = useState(false)

  if (!token && !signUp) {
    return <Login setToken={setToken} setSignUp={setSignUp} />
  }

  if (!token && signUp) {
    return <SignUp setSignUp={setSignUp} />
  }

  return <Home />
}
export default App
