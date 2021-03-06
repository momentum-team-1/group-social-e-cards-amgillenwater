import React from 'react'
import { Grommet, Header, Main, Nav, Button } from 'grommet'
import { grommet } from 'grommet/themes'
import { Link } from 'react-router-dom'

const Home = ({ token }) => {
  return (
    <Grommet theme={grommet}>
      <Header background='light-3' pad='medium'>
        <Link style={{ textDecoration: 'none' }} to='/feed/'>Card Club</Link>
        <Nav direction='row' color='neutral-1' pad='medium' wrap>
          <Link to='/new/' style={{ textDecoration: 'none' }}>Create Card</Link>
          <Link to='/me/' style={{ textDecoration: 'none' }}>Profile</Link>
          <Link to='/friends/' style={{ textDecoration: 'none' }}>Friends List</Link>
          <Link to='/logout/'>
            <Button plain>
         Log Out
            </Button>
          </Link>
        </Nav>
      </Header>
      <Main pad='small' />
    </Grommet>
  )
}

export default Home
