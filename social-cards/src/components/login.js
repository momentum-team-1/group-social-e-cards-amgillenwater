import React, { useState, setState } from 'react'
import { getToken, getCards } from '../api'

export default function LogIn (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    getToken(username, password)
      .then(token => {
        //    ({ token: token, password: '' })
        localStorage.setItem('login_username', username)
        localStorage.setItem('login_auth_token', token)
      })
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor='exampleInputEmail1'>Username: </label>
          <input
            type='text'
            id='username'
            placeholder='Enter username'
            value={username}
          />
        </div>
        <div>
          <label htmlFor='exampleInputPassword1'>Password: </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
          />
        </div>
        <button
          type='submit'
          onSubmit={handleLogin}
        >
            Register
        </button>
      </form>
    </div>
  )
}
