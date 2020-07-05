/* globals localStorage */
import React, { useState } from 'react'
import './App.css'
import LogIn from './components/login'
// import CardDetail from './components/cardDetail'
// import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import CardFeed from './components/cardFeed'

function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  const isLoggedIn = props.isLoggedIn
  // ^ if local storage has a token, it will have that in state, otherwise null/undef

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' render={() => <LogIn setToken={setToken} />} />
          <Route path='/feed' render={() => <CardFeed token={token} />} />

        </Switch>
      </Router>
    </div>

  )
}

export default App
