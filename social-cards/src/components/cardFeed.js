/* globals localStorage */
import React, { useState, useEffect } from 'react'
import { getCards } from '../api'

const CardFeed = (props) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (localStorage.getItem('login_auth_token')) {
      getCards(localStorage.getItem('login_auth_token')).then(cards => setCards(cards))
    }
  }, [])

  return (
    <div>
      <ul>
        {cards && cards.map((card) => {
          return (
            <li key={card.id}>{card.author}</li>)
        })}
      </ul>
    </div>)
}

export default CardFeed
