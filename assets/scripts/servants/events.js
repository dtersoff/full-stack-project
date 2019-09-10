const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')

// // fills in empty fields when updating servant
const fillEmptyFields = (data) => {
  // emulating an object each by going through the keys and then comparing them in
  // the object
  const keys = Object.keys(store.currentServant)
  keys.pop()
  keys.shift()
  keys.forEach(key => {
    // if the value for that key in the given servant object is null
    console.log(store.currentServant)
    if (data.servant[key] === '' || data.servant[key] === null ||
    data.servant[key] === undefined) {
      // console.log('empty')
      // apply the value of that key from the currently stored data.servant, which
      // was stored when the update view was triggered
      data.servant[key] = store.currentServant[key]
    }
    // console.log(data.servant)
  })
  return data
}

// nav button functions
const onGoCreateServant = event => {
  event.preventDefault()
  ui.goCreateServant()
}

const onShowUpdate = event => {
  event.preventDefault()
  ui.onShowUpdate()
}

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.failure)
}

// CRUD functions
const onCreateServant = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const data = fillEmptyFields(formData)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.failure)
}

const onGetServant = event => {
  event.preventDefault()
  const data = $(event.target).data('id')
  api.show(data)
    .then(ui.onShowSuccess)
    .catch(ui.failure)
}

const onUpdateServant = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const data = fillEmptyFields(formData)
  api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.failure)
}

const onDeleteServant = (event) => {
  event.preventDefault()
  const data = $(event.target).data('id')
  api.destroy(data)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.failure)
  $('#message')
    .text('Servant deleted')
    .css('color', 'green')
}

const onSortByAttack = event => {
  event.preventDefault()
  api.index()
    .then(ui.onSortByAttackSuccess)
    .catch(ui.failure)
}

// sort options
const onSortByClass = event => {
  event.preventDefault()
  api.index()
    .then(ui.onSortByClassSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('nav').on('submit', '.go-create-servant', onGoCreateServant)
  $('.main-content').on('click', '.show-update', onShowUpdate)

  $('nav').on('submit', '.show-servants', onIndex)
  $('.main-content').on('submit', '.show-servant-button', onGetServant)
  $('.main-content').on('submit', '#new-servant', onCreateServant)
  $('.main-content').on('submit', '.update-servant', onUpdateServant)
  $('.main-content').on('click', '.delete-button', onDeleteServant)

  $('.main-content').on('click', '.by-attack', onSortByAttack)
  $('.main-content').on('click', '.by-class', onSortByClass)
}

module.exports = {
  addHandlers
}
