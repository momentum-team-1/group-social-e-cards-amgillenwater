import React, { useEffect } from 'react'
import '../app.css'
import { CardDiv } from './StyledComponents'
import { Link } from 'react-router-dom'
import { deleteCard } from '../api'
import { Trash } from 'grommet-icons'
import { Button, Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

export default function Cards ({ cards, token }) {
  const handleDelete = (event, id) => {
    event.preventDefault()
    deleteCard(token, id)
  }

  return (
    <div>
      <Grommet full theme={grommet}>
        {cards && cards.map((card) => {
          return (
            <CardDiv key={card.id} className={card.color}>
              <h2 className={card.font}>{card.text_outer}</h2>
              <p className={card.font}>{card.text_inner} <br /> <Link to={`/${card.author}/`}>@{card.author}</Link></p>
              <Button align='right' icon={<Trash color='white' />} onClick={event => handleDelete(event, card.id)}>Delete</Button>
            </CardDiv>
          )
        })}
      </Grommet>

    </div>
  )
}
