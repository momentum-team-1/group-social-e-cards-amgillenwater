import React, { useState, useEffect } from 'react'
import { Button } from 'grommet'
import { deleteCard } from '../api'

function DeleteCard ({ token }) {
  const handleDelete = (event, id) => {
    event.preventDefault()
    deleteCard(token, id)
  }

  return (
    <Button type='submit' primary label='Delete' onClick={handleDelete} />
  )
}

export default DeleteCard
