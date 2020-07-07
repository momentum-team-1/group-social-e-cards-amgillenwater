/* globals localStorage */
import React, { useState, setState } from 'react'
import { Redirect, Link } from 'react-router-dom'

function Nav (props) {
  const [redirect, setRedirect] = useState(false)

  const logout = () => {
    if (localStorage.getItem('login_auth_token')) { localStorage.clear() }
  }

  const handleRedirect = () => {
      if (localStorage.getItem('login_auth_token'))
      setRedirect(false) 
  }

  return (
    <div>
      <button type='submit' onClick={logout} onClick={()=>handleRedirect()}>Log out</button>
    </div>
  )
}

export default Nav
