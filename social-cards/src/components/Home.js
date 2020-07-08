/* globals localStorage */
import React, { useState } from 'react'
import LogOut from './LogOut'
import CardFeed from './cardFeed'
import { Grommet, Header, Main, Nav, Text } from 'grommet'
import { grommet } from 'grommet/themes'
import { Link } from 'react-router-dom'

const Home = ({ username, setToken, setUsername }) => {
  return (
    <Grommet theme={grommet}>
      <Header background='light-4' pad='small'>
        <Text size='medium'>Card Club</Text>
        <Nav direction='row'>
          <Link to='/feed/'>Feed</Link>
          <Link to='/logout/'>Log out</Link>
        </Nav>

      </Header>
      <Main pad='small'>
        <CardFeed />
      </Main>
    </Grommet>
  )
}

export default Home
