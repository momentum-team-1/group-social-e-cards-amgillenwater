import React from 'react'
import { Card } from './StyledComponents'

export default function Cards ({ cards }) {
  return (
    <div>
      <ul>
        {cards && cards.map((card) => {
          return (
            <div key={card.id}>
              <Card key={card.id} card={card} outer={card.text_outer} inner={card.text_inner} author={card.author} />
            </div>
          )
        })}
      </ul>
    </div>)
}
