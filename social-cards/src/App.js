/* globals localStorage */
import React, { useState } from 'react'
import './App.css'
import LogIn from './components/login'
import Card from './components/card'
// import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  // ^ if local storage has a token, it will have that in state, otherwise null/undef

  return (
    <Router>
      <div className='App'>
        {/* <Nav setToken={setToken} /> */}
        <Switch>
          <Route
            path='/auth/token/login' render={() => <LogIn setToken={setToken} />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
