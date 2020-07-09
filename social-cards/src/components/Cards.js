import React from 'react'
import '../app.css'
import { CardDiv } from './StyledComponents'
import { Link } from 'react-router-dom'

export default function Cards ({ cards }) {
  return (
    <div>
      {cards && cards.map((card) => {
        return (
          <CardDiv key={card.id} className={card.color}>
            <h2 className={card.font}>{card.text_outer}</h2>
            <p className={card.font}>{card.text_inner} <br /> <Link to={`/${card.author}/`}>@{card.author}</Link></p>
          </CardDiv>
        )
      })}
    </div>
  )
}
