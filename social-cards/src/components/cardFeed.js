/* globals localStorage */
import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { getCards } from '../api'

const CardFeed = (token) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (localStorage.getItem('login_auth_token')) {
      getCards(localStorage.getItem('login_auth_token')).then(cards => setCards(cards.results))
    }
  }, [])

  return (
    <Cards cards={cards} />
  )
}

export default CardFeed
