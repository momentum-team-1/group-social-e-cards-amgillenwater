/* globals localStorage */
import React, { useState } from 'react'
import './App.css'
import LogIn from './components/login'
import CardFeed from './components/CardFeed'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  const isLoggedIn = props.isLoggedIn
  // ^ if local storage has a token, it will have that in state, otherwise null/undef

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' render={() => <LogIn setToken={setToken} />} />
          <Route path='/feed' render={() => <CardFeed token={token} />} />
        </Switch>
      </Router>
    </div>

  )
}

export default App
