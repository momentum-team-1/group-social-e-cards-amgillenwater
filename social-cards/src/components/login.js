/* globals localStorage */
import React, { useState } from 'react'
import { getToken } from '../api'

export default function LogIn ({ setToken }) {
  const [username, setUsername] = useState(localStorage.getItem('login_username') || '')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    getToken(username, password)
      .then(token => {
        setToken(token)
        localStorage.setItem('login_username', username)
        localStorage.setItem('login_auth_token', token)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type='text'
            id='username'
            placeholder='Enter username'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button
          type='submit'
        >
            Log In
        </button>
      </form>
    </div>
  )
}