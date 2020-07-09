import React, { useState } from 'react'
import '../app.css'
import { CardDiv } from './StyledComponents'
import { deleteCard } from '../api'
import { Trash } from 'grommet-icons'
import { Button, Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

export default function Cards ({ cards, token }) {
  const [reload, setReload] = useState('')
  const handleDelete = (event, id) => {
    event.preventDefault()
    deleteCard(token, id)
      .then(response => {
        console.log(response)
        if (response.status === 204) {
          setReload('deleted')
          return reload
        }
      }
      )
  }

  return (
    <div>
      <Grommet full theme={grommet}>
        {cards && cards.map((card) => {
          return (
            <div key={card.id}>
              <CardDiv className={card.color}>
                <h2 className={card.font}>{card.text_outer}</h2>
                <p className={card.font}>{card.text_inner} <br />@{card.author}</p>
                <Button align='right' icon={<Trash color='white' />} onClick={event => handleDelete(event, card.id)} />
              </CardDiv>
            </div>
          )
        })}
      </Grommet>

    </div>
  )
}
