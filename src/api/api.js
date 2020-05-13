import axios from 'axios'

const api = axios.create({
  baseURL: 'https://park-idiomas.herokuapp.com',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZHJ5ZWxsZXRlaXhlaXJhLnBhcmtpZGlvbWFzQGdtYWlsLmNvbSIsImV4cCI6MTU5NTk0ODQxMn0.7dm6lIYReX_BQhSaXAP1PCpdc0Y7aT8FZZn1KQIyLXR2ZxptlauEwkwxT7QLsziJWrzJ0SYSL0_ND0dw9nujCg'
  }
})

export default api