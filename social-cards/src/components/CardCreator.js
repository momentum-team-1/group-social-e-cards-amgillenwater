import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createCard } from '../api'

function CardCreator (token) {
  const [outer, setOuter] = useState('')
  const [inner, setInner] = useState('')
  const [created, setCreated] = useState(false)

  const handleOuterChange = (event) => {
    this.setOuter({ title: event.target.value })
  }

  const handleInnerChange = (event) => {
    this.setInner({ subject: event.target.value })
  }

  // const handleSubmit = (event, token) => {
  //   event.preventDefault()
  //   axios
  //     .post('https://card-club.herokuapp.com/api/card/', {
  //       text_inner: { outer },
  //       text_outer: { inner }
  //     },
  //     {
  //       headers: {
  //         Authorization: `Token ${token}`
  //       }
  //     })
  //     // .then(response => {
  //     //   setCreated(true)
  //     // })
  }
  // console.log(setCreated)
  // if (setCreated) {
  //   return (console.log('setCreated is true, put your redirect here'))
  // }
  return (
    <form onSubmit={createCard()}>
      <div>
        <label>Title</label>
        <input type='text' name='title' required />
        <label>Text</label>
        <input type='text' name='text' required />
      </div>
      <button type='submit'>Create Card</button>
    </form>
  )
}

export default CardCreator
