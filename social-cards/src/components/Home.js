/* globals localStorage */
import React, { useState } from 'react'
import LogOut from './LogOut'
import { Grommet, Box, Button, Grid, Text } from 'grommet'
import { grommet } from 'grommet/themes'

const Home = ({ username, setToken, setUsername }) => {
  const [sidebar, setSidebar] = useState(true)

  const handleLogout = () => {
    setToken(null)
    setUsername('')
    localStorage.removeItem('login_auth_token')
    localStorage.removeItem('login_username')
  }

  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box
          gridArea='header'
          direction='row'
          align='center'
          justify='between'
          pad={{ horizontal: 'medium', vertical: 'small' }}
          background='dark-2'
        >
          <Button onClick={() => setSidebar(!sidebar)}>
            <Text size='large'>Card Club</Text>
          </Button>
          <LogOut handleLogout={handleLogout} />
        </Box>
        {sidebar && (
          <Box
            gridArea='sidebar'
            background='dark-3'
            width='small'
            animation={[
              { type: 'fadeIn', duration: 300 },
              { type: 'slideRight', size: 'xlarge', duration: 150 }
            ]}
          >
            {['First', 'Second', 'Third'].map(name => (
              <Button key={name} href='#' hoverIndicator>
                <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                  <Text>{name}</Text>
                </Box>
              </Button>
            ))}
          </Box>
        )}
        <Box gridArea='main' justify='center' align='center'>
          <Text>main</Text>
        </Box>
      </Grid>
    </Grommet>
  )
}

export default Home
