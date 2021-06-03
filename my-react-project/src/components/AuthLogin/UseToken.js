import React from 'react'
import { useState } from 'react'
function UseToken() {
  const getToken = () => {
    const tokenStr = localStorage.getItem('token')
    const userToken = JSON.parse(tokenStr)
    return userToken?.token
  }
  const [token, setToken] = useState(getToken())

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token,
  }
}

export default UseToken
