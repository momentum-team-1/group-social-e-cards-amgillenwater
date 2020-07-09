import React, { useState, useEffect } from 'react'
import { grommet, Box, FormField, Select, Grommet } from 'grommet'
import { getUserList } from '../api'

function Recipient ({ token }) {
  const [users, setUsers] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    if (token) {
      getUserList(token).then(users => setUsers(users))
    }
  })

  return (
    <Grommet theme={grommet}>
      <Box align='center' pad='large'>
        <FormField label='Label' htmlFor='select'>
          <Select
            options={users}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </FormField>
      </Box>
    </Grommet>
  )
}

export default Recipient
