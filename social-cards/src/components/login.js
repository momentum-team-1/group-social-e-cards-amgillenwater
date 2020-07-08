/* globals localStorage */
import React, { useState } from 'react'
import { getToken } from '../api'
import { Box, Grommet, TextInput, Button, Form, FormField, Header, Nav } from 'grommet'
import { grommet } from 'grommet/themes'
import { Link } from 'react-router-dom'

export default function LogIn ({ setToken, username, setUsername }) {
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    getToken(username, password)
      .then(token => {
        setToken(token)
        localStorage.setItem('login_username', username)
        localStorage.setItem('login_auth_token', token)
      })
  }

  return (
    <Grommet full theme={grommet}>
      <Header background='light-3' pad='medium'>
        <Link style={{ textDecoration: 'none' }} to='/feed/'>CardClub</Link>
        <Nav direction='row' color='neutral-1' height='xxsmall' gap='small' wrap />
      </Header>
      <Box align='center' pad='large'>
        <Form onSubmit={handleLogin}>
          <FormField name='username' label='username'>
            <TextInput
              value={username} onChange={event => setUsername(event.target.value)}
            />
          </FormField>
          <FormField name='password' label='password'>
            <TextInput
              value={password}
              type='password'
              onChange={event => setPassword(event.target.value)}
            />
          </FormField>
          <Button type='submit' primary label='Log In' />

        </Form>
      </Box>

    </Grommet>
  )
}
