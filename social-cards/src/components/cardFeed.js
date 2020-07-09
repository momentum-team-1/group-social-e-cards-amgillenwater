import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { getCards } from '../api'
import '../app.css'

const CardFeed = ({ token }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (token) {
      getCards(token).then(cards => setCards(cards.results))
    }
  }, [token, setCards])

  return (
    <div align='center'>
      <Cards cards={cards} />
    </div>
  )
}

export default CardFeed
