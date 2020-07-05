import React from 'react'
import { getCards } from '../api'

class CardFeed extends React.Component {
  constructor () {
    super()
    this.state = {
      cardList: [],
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
    return (
      <div className='CardFeed'>
        {this.state.cardList}
        <div>
          <div>
            {this.state.cardList.map(card => <p className='card' key={card.id}><a href={`/card/${card.id}/`}>{card.text_outer}</a></p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default CardFeed
