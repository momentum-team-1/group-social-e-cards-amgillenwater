import React, { useState } from 'react'
import axios from 'axios'
import { Box, Grommet, TextInput, TextArea, Button, Form, FormField } from 'grommet'
import { grommet } from 'grommet/themes'
import { useHistory } from 'react-router-dom'

function CardCreator ({ token }) {
  const [outer, setOuter] = useState('')
  const [inner, setInner] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://card-club.herokuapp.com/api/card/', {
        text_inner: outer,
        text_outer: inner
      },
      {
        headers: {
          Authorization: `Token ${token}`
        }
      })
  }

  return (
    <Grommet full theme={grommet}>
      <Box align='center' pad='large'>
        <Form onSubmit={handleSubmit}>
          <FormField name='title' label='title'>
            <TextInput
              value={outer}
              onChange={event => setOuter(event.target.value)}
              required
            />
          </FormField>
          <FormField name='body' label='text'>
            <TextArea
              value={inner}
              type='password'
              onChange={event => setInner(event.target.value)}
              required
            />
          </FormField>
          <Button type='submit' primary label='Submit' onClick={() => history.goBack()} />

        </Form>
      </Box>
    </Grommet>
  )
}

export default CardCreator
