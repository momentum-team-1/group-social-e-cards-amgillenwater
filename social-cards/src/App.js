/* globals localStorage */
import React, { useState } from 'react'
import './App.css'
import LogIn from './components/login'

function App () {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  return (
    <div className='App'>
      <LogIn setToken={setToken} />
    </div>
  )
}

export default App
