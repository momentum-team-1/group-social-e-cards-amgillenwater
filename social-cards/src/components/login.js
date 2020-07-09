/* globals localStorage */
import React, { useState } from 'react'
import { getToken } from '../api'
import { Box, Grommet, TextInput, Button, Form, FormField } from 'grommet'
import { grommet } from 'grommet/themes'
import { CardDiv } from './StyledComponents'
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
      <Box align='center' pad='large'>
        <CardDiv className='welcome'>
          <h2 className='sansserif'>Welcome to Card Club!</h2>
          <p className='sansserif'>Card Club is a social platform where you can create cards to share with your friends.</p>
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

        </CardDiv>
      </Box>

    </Grommet>
  )
}
