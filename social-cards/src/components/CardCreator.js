import React, { useState } from 'react'
import axios from 'axios'
import { Box, Grommet, TextInput, TextArea, Button, Form, FormField, Select } from 'grommet'
import { grommet } from 'grommet/themes'
import { useHistory } from 'react-router-dom'

function CardCreator ({ token }) {
  const [outer, setOuter] = useState('')
  const [inner, setInner] = useState('')
  const [color, setColor] = useState('')
  const [font, setFont] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://card-club.herokuapp.com/api/card/', {
        text_inner: outer,
        text_outer: inner,
        color: color
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
              value={inner}
              onChange={event => setInner(event.target.value)}
              required
            />
          </FormField>
          <FormField name='body' label='text'>
            <TextArea
              value={outer}
              onChange={event => setOuter(event.target.value)}
              type='password'
              required
            />
          </FormField>
          <FormField label='color' name='color'>
            <Select
              name='color'
              options={['orange', 'magenta', 'pink', 'purple', 'yellow']}
              value={color}
              onChange={event => setColor(event.option)}
              required
            />
          </FormField>
          <FormField label='font' name='font'>
            <Select
              name='font'
              options={['serif', 'sansserif']}
              value={font}
              onChange={event => setFont(event.option)}
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
