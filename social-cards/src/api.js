
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://card-club.herokuapp.com/api'
})

export function getToken (username, password) {
  return request.post('/login/', {
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

// export function makeCard (token){
//   return request.post('/')
// }
