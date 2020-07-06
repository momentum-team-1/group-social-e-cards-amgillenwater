/* globals localStorage */
import React, { useState } from 'react'
import './App.css'
import LogIn from './components/login'
import CardFeed from './components/CardFeed'
import CardCreator from './components/CardCreator'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  // ^ if local storage has a token, it will have that in state, otherwise null/undef

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />} />
          <Route path='/feed' render={() => <CardFeed token={token} />} />
          <Route path='/new' render={() => <CardCreator token={token} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
