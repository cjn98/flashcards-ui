const baseUrl = 'http://localhost:3000'

const userUrl = baseUrl + '/user'
const register = '/register'
const activate = '/activate'
const login = '/login'
const registerUrl = userUrl + register
const activateUrl = userUrl + activate
const loginUrl = userUrl + login

const getUserCardsUrl = userId => `${userUrl}/${userId}/cards`
const cardsUrl = baseUrl + '/cards'

const jsonContentHeader = {"Content-Type": "application/json"}
const getAuthToken = token => ({"Authorization": `Bearer ${token}`})

export {
  baseUrl,
  registerUrl,
  activateUrl,
  loginUrl,
  getUserCardsUrl,
  cardsUrl,
  jsonContentHeader,
  getAuthToken
}
