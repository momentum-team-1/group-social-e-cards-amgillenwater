import React from 'react'
import { getCards } from '../api'

class CardFeed extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      token: window.localStorage.getItem('login_auth_token')
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    const card = this.state.cards.map((cards, idx) =>
      <li key={cards.idx}>{cards.author}</li>
    )
    return (
      <div className='CardFeed'>
        <p>{card}</p>
      </div>
    )
  }
}

export default CardFeed
