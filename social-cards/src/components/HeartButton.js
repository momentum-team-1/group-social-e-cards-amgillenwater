import React, { useState } from 'react'

function HeartButton () {
  const [likes, setlikes] = useState(0)
  return (
    <div>
      <button onClick={() => setlikes(likes + 1)}>{likes}</button>
    </div>
  )
}
export default HeartButton
