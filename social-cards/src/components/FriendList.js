import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFriendList } from '../api'
import { Grommet } from 'grommet'
import { CardDiv } from './StyledComponents'

export default function FriendList ({ username, token }) {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    if (token) {
      getFriendList(username, token).then(friends => setFriends(friends))
    }
  })

  return (
    <Grommet>
      <CardDiv className='sansserif'>
        <ul>
          {friends && friends.map((friend) => {
            return (
              <li key={friend.username}> <Link to={`/${friend.username}/`} style={{ textDecoration: 'none' }}>{friend.username}</Link></li>
            )
          })}

        </ul>
      </CardDiv>
    </Grommet>

  )
}
