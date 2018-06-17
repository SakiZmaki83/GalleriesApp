import axios from 'axios'

export default class Galleries {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api/'
  }

  getAll () {
    return axios.get('galleries')
  }

  add (gallery) {
    return axios.post('galleries', gallery)
  }

  remove (id) {
    return axios.delete(`galleries/${id}`)
  }

  edit (gallery) {
    return axios.put(`galleries/${gallery.id}`, gallery)
  }

  get (id) {
    return axios.get(`galleries/${id}`)
  }
  getSingleUserGalleries(){

    const TOKENUSER = `${window.localStorage.getItem('user')}`

    return axios.get(`my-galleries/${TOKENUSER}`)

}

addGallery(name,inputs,description){

    const USERID = `${window.localStorage.getItem('user')}`

    return axios.post('galleries',{
        name,
        inputs,
        description,
        USERID


    })

}


}



export const galleries = new Galleries()