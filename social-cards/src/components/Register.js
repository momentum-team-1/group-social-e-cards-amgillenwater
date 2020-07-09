import React, { useState } from 'react'
import axios from 'axios'
import { Box, Grommet, TextInput, Button, Form, FormField } from 'grommet'
import { grommet } from 'grommet/themes'
import { CardDiv } from './StyledComponents'
import { useHistory } from 'react-router-dom'

function Register ({ token }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://card-club.herokuapp.com/api/auth/users/', {
        username: username,
        password: password,
        email: email
      })
  }

  return (
    <Grommet full theme={grommet}>
      <Box align='center' pad='large'>
        <CardDiv className='welcome'>
          <h2 className='sansserif'>Welcome to Card Club!</h2>
          <p className='sansserif'>Card Club is a social platform where you can create cards to share with your friends.</p>
          <Form onSubmit={handleSubmit}>
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
            <FormField name='email' label='email'>
              <TextInput
                value={email}
                type='email'
                onChange={event => setEmail(event.target.value)}
              />
            </FormField>
            <Button type='submit' primary label='Register' onClick={() => history.goBack()} />
          </Form>

        </CardDiv>
      </Box>

    </Grommet>
  )
}

export default Register
