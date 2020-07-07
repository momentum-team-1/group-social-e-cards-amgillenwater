import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LogIn from './login'
import CardFeed from './CardFeed'
import CardCreator from './CardCreator'

function SideBar () {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))

  return (
    <Router>
      <Link to='/' exact render={() => <LogIn setToken={setToken} />}>LogIn</Link>
      <Link to='/feed' render={() => <CardFeed token={token} />}>Feed</Link>
      <Link to='/new' render={() => <CardCreator token={token} />}>New Card</Link>
    </Router>
  )
}

export default SideBar
