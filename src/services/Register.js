import axios from 'axios'

export default class Registration {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api/'
  }

  registerUser (user) {
    return axios.post(`register`, user)
  }

  

  
}

export const register = new Registration()