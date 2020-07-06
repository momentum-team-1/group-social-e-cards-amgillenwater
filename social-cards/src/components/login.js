/* globals localStorage */
import React, { useState } from 'react'
import { getToken } from '../api'
import { Button } from './StyledComponents'

export default function LogIn ({ setToken }) {
  const [username, setUsername] = useState(localStorage.getItem('login_username') || '')
  const [password, setPassword] = useState('')
  // ^ if local storage has a token, it will have that in state, otherwise null/undef

  const handleLogin = (event) => {
    event.preventDefault()
    getToken(username, password)
      .then(token => {
        setToken(token)
        localStorage.setItem('login_username', username)
        localStorage.setItem('login_auth_token', token)
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
