import React from 'react'
import { NavLink } from 'react-router-dom'
import LogIn from './login'

export default function Nav ({setToken}) {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/auth/token/login' render={() => <LogIn setToken={setToken} />}>
            Log In
          </NavLink>
        </li>
        <li>
            New Card
        </li>
      </ul>
    </nav>
  )
}
