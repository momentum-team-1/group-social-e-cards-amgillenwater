
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://card-club.herokuapp.com/api'
})

export function getToken (username, password) {
  return request.post('/auth/token/login/', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getCards (token) {
  return request.get('/card/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data)
}

export const createCard = (event, token, outer, inner) => {
  event.preventDefault()
  axios
    .post('https://card-club.herokuapp.com/api/card/', {
      text_inner: { outer },
      text_outer: { inner }
    },
    {
      headers: {
        Authorization: `Token${token}`
      }
    })
}
