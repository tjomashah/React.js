import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../App.css'

async function loginUser(credentials) {
  return fetch('http://localhost:4010/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

function Login({ setToken }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await loginUser({
      email,
      password,
    })
    setToken(token)
  }

  return (
    <div className="login-content">
      <h4 className="login-header">Please, login</h4>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <input
            className="form-control form-control-sm"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <input
            className="form-control form-control-sm"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}
