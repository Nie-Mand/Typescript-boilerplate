import axios from 'axios'

const api_url = process.env['NX_API_URL']

export default axios.create({
  baseURL: api_url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
