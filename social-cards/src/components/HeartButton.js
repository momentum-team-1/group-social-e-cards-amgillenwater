import React, { useState } from 'react'

function HeartButton () {
  const [likes, setlikes] = useState(0)
  return (
    <div>
      <p>{likes}</p>
      <button onClick={() => setlikes(likes + 1)}>love</button>
    </div>
  )
}
export default HeartButton
