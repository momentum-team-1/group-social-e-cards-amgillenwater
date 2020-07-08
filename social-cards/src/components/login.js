/* globals localStorage */
import React, { useState } from 'react'
import { getToken } from '../api'
import { Box, Grommet, TextInput, Button, Form, FormField } from 'grommet'
import { grommet } from 'grommet/themes'

export default function LogIn ({ setToken }) {
  const [username, setUsername] = useState(localStorage.getItem('login_username') || '')
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
          <Button type='submit' primary label='Submit' />

        </Form>
      </Box>
    </Grommet>
  )
}
