import React from 'react'
import '../app.css'
import { CardDiv } from './StyledComponents'

export default function Cards ({ cards }) {
  return (
    <div>
      {cards && cards.map((card) => {
        return (
          <CardDiv key={card.id} className={card.color}>
            <h2 className='{card.font}'>{card.text_outer}</h2>
            <p>{card.text_inner} <br /> add a link to profile here @{card.author}</p>
          </CardDiv>
        )
      })}
    </div>
  )
}
