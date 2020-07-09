import React, { useState } from 'react'
import { Favorite } from 'grommet-icons'
import { Grommet } from 'grommet'

function HeartButton () {
  const [likes, setlikes] = useState(0)
  return (
    <div>
      <Grommet>
        <button icon={<Favorite />} label={likes} onClick={() => setlikes(likes + 1)} />
      </Grommet>
    </div>
  )
}
export default HeartButton
