/* globals localStorage */
import React, { useState } from 'react'
import './App.css'
import LogIn from './components/login'
// import CardDetail from './components/cardDetail'
// import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/home'
function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  const isLoggedIn = props.isLoggedIn
  // ^ if local storage has a token, it will have that in state, otherwise null/undef
  if (isLoggedIn) {
    return <Home />
  }
  return (
    <LogIn setToken={setToken} />
  )
}

export default App
