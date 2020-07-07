/* globals localStorage */
import React, { useState } from 'react'
import LogIn from './components/login'
import CardFeed from './components/CardFeed'
import CardCreator from './components/CardCreator'
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet'
import { FormClose, Menu } from 'grommet-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = {
  colors: {
    brand: '#228BE6'
  },
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
}
const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)
function App (props) {
  const [token, setToken] = useState(localStorage.getItem('login_auth_token'))
  // ^ if local storage has a token, it will have that in state, otherwise null/undef
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>Card Club</Heading>
              <Button
                icon={<Menu />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                <LogIn setToken={setToken} />
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction='horizontal' open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                      sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(!showSidebar)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                      sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
