import React, { useState, useEffect } from 'react'
import { Box, Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { getMyCards } from '../api'
import Cards from './Cards'

const Profile = ({ token, username }) => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    if (token) {
      getMyCards(token).then(cards => setCards(cards.results))
    }
  })
  return (
    <div>
      <Grommet full theme={grommet}>
        <Box align='center' pad='large'>
          <p>Hi, {username}!</p>
          <Cards cards={cards} />
        </Box>
      </Grommet>
    </div>
  )
}

export default Profile
