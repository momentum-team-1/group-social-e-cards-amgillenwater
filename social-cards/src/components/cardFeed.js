/* globals localStorage */
import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { getCards } from '../api'
import { Box, Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

const CardFeed = ({ token }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (token) {
      getCards(token).then(cards => setCards(cards.results))
    }
  })

  return (
    <div>
      <Grommet full theme={grommet}>
        <Box align='center' pad='large'>
          <Cards cards={cards} />
        </Box>
      </Grommet>
    </div>
  )
}

export default CardFeed
