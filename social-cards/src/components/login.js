import React, { useState, setState } from 'react'
import { getToken, getCards } from '../api'

function LogIn (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
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
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='exampleInputPassword1'>Password: </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
        >
            Register
        </button>
      </form>
    </div>
  )
}

export default LogIn
