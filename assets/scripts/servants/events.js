const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

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

const onCreateServant = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
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
  api.update(formData)
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
