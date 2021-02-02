import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-530c9.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/challenge-530c9/us-central1/api'
})

export default instance