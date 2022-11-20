import { useState } from 'react'

function useToken() {
  const [token, setToken] = useState(getToken())

  function getToken() {
    const tokenString = localStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken
  }

  function saveToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken)
  }

  return {
    setToken: saveToken,
    token,
  }
}

export default useToken
