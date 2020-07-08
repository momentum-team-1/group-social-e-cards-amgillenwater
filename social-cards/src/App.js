/* globals localStorage */
import React, { useState } from 'react'
import LogIn from './components/login'
import LogOut from './components/LogOut'
import CardFeed from './components/CardFeed'
import CardCreator from './components/CardCreator'
// import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet'
// import { FormClose, Menu } from 'grommet-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  const [username, setUsername] = useState(localStorage.getItem('login_username'))
  // ^ if local storage has a token, it will have that in state, otherwise null/undef
  const handleLogout = () => {
    setToken(null)
    setUsername('')
    localStorage.removeItem('login_auth_token')
    localStorage.removeItem('login_username')
  }

  if (token) {
    return (
      <Router>
        <div>
          <p>Hi, {username}!</p>
          <p><Link to='/logout/'>Log out</Link></p>
          <Switch>
            <Route path='/' exact render={() => <LogIn setToken={setToken} />} />
            <Route path='/feed' render={() => <CardFeed token={token} />} />
            <Route path='/new' render={() => <CardCreator token={token} />} />
            <Route path='/logout/' render={() => <LogOut onLogout={handleLogout} />} />
          </Switch>
        </div>
      </Router>
    )
  }
  return (
    <Router>
      <Route path='/' exact render={() => <LogIn setToken={setToken} />} />
    </Router>
  )
}

export default App
