/* globals localStorage */
import React, { useState } from 'react'
import './app.css'
import LogIn from './components/login'
import LogOut from './components/LogOut'
import CardFeed from './components/cardFeed'
import CardCreator from './components/CardCreator'
import Home from './components/Home'
import Profile from './components/Profile'
import FriendList from './components/FriendList'
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  const [username, setUsername] = useState(localStorage.getItem('login_username') || '')

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
          <Home username={username} />
          <Switch>
            <Route path='/' exact render={() => <CardFeed token={token} />} />
            <Route path='/feed/' render={() => <CardFeed token={token} />} />
            <Route path='/new/' render={() => <CardCreator token={token} />} />
            <Route path='/logout/' render={() => <LogOut onLogout={handleLogout} />} />
            <Route path='/me/' render={() => <Profile username={username} token={token} />} />
            <Route path='/friends/' render={() => <FriendList token={token} username={username} />} />
            <Route path={`/${username}/`} render={() => <Profile username={username} token={token} />} />
          </Switch>
        </div>
      </Router>
    )
  }
  return (
    <Router>
      <Route path='/' exact render={() => <LogIn setToken={setToken} username={username} setUsername={setUsername} />} />
      <Route path='/register/' exact render={() => <Register token={token} />} />

    </Router>
  )
}

export default App
