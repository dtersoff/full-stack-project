'use strict'

const config = require('../config.js')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/servants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// const show = () => {
//
// }

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/servants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// const update = () => {
//
// }
//
const destroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/servants/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  index,
  // show,
  create,
  // update,
  destroy
}
