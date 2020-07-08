/* globals localStorage */
import React, { useState } from 'react'
import LogOut from './LogOut'
import CardFeed from './cardFeed'
import { Anchor, Grommet, Header, Main, Nav, Text } from 'grommet'
import { grommet } from 'grommet/themes'
import { Link } from 'react-router-dom'

const Home = ({ token }) => {
  return (
    <Grommet theme={grommet}>
      <Header background='light-4' pad='small'>
        <Link style={{ textDecoration: 'none' }} to='/feed/'>CardClub</Link>
        <Nav direction='row'>
          <Link to='/new/' style={{ textDecoration: 'none' }}>Create Card</Link>
          <Link to='/logout/'>Log out</Link>
        </Nav>

      </Header>
      <Main pad='small' />
    </Grommet>
  )
}

export default Home
