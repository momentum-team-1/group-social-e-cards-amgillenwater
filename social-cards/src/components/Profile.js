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
    <div align='center'>
      <Grommet full theme={grommet}>
        <Box align='center' pad='large'>
          <h2>Hi, {username}!</h2>
          <p>Here's a list of cards you've made or were tagged in:</p>
          <Cards cards={cards} align='center' />
        </Box>
      </Grommet>
    </div>
  )
}

export default Profile
