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
  console.log(formData)

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

const addHandlers = () => {
  $('nav').on('submit', '.go-create-servant', onGoCreateServant)
  $('section').on('click', '.show-update', onShowUpdate)

  $('section').on('submit', '#new-servant', onCreateServant)
  $('nav').on('submit', '.show-servants', onIndex)
  $('section').on('submit', '.show-servant-button', onGetServant)
  $('section').on('submit', '.update-servant', onUpdateServant)
  $('section').on('click', '.delete-button', onDeleteServant)
}

module.exports = {
  addHandlers
}
