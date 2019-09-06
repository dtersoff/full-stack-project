'use strict'

let apiUrl
const apiUrls = {
  production: 'https://dtersoff-full-stack-project.herokuapp.com/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
