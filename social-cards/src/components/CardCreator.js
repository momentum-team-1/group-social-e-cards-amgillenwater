import React, { useState } from 'react'
import axios from 'axios'

function CardCreator ({ token }) {
  const [outer, setOuter] = useState('')
  const [inner, setInner] = useState('')
  const [created, setCreated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://card-club.herokuapp.com/api/card/', {
        text_inner: outer,
        text_outer: inner
      },
      {
        headers: {
          Authorization: `Token ${token}`
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type='text' name='title' onChange={event => setOuter(event.target.value)} value={outer} required />
        <label>Text</label>
        <input type='text' name='text' onChange={event => setInner(event.target.value)} value={inner} required />
      </div>
      <button type='submit' onChange={event => setCreated(true)}> Create Card</button>
    </form>
  )
}

export default CardCreator
