/* globals localStorage */
import React, { useState, useEffect } from 'react'
import { getCards } from '../api'
import { Card } from './StyledComponents'
import HeartButton from './HeartButton'

const CardFeed = (token) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (localStorage.getItem('login_auth_token')) {
      getCards(localStorage.getItem('login_auth_token')).then(cards => setCards(cards.results))
    }
  }, [])

  return (
    <div>
      <ul>
        {cards && cards.map((card) => {
          return (
            <div key={card.id}>
              <Card key={card.id} card={card} outer={card.text_outer} inner={card.text_inner} author={card.author} />
              <HeartButton key={card.id} />
            </div>
          )
        })}
      </ul>
    </div>)
}

export default CardFeed
