
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

export function getMyCards (token) {
  return request.get('/card/mine/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data)
}

export function getFriendList (username, token) {
  return request.get(`/user/${username}/friend_list/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data)
}

export function deleteCard (token, id) {
  return request.delete(`/card/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log(res)
    console.log(res.data)
  })
}

export function getUserList (token) {
  return request.get('/user/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data)
}
