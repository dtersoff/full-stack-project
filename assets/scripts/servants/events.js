const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.failure)
}

const onGetServant = event => {
  event.preventDefault()
  const data = $(event.target).data('id')
  api.show(data)
    .then(ui.onShowSuccess)
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

const onDeleteServant = (event) => {
  event.preventDefault()
  const data = $(event.target).data('id')
  api.destroy(data)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.failure)
}

const onGoCreateServant = event => {
  event.preventDefault()
  ui.goCreateServant()
}

const addHandlers = () => {
  $('nav').on('submit', '.go-create-servant', onGoCreateServant)
  $('section').on('submit', '#new-servant', onCreateServant)
  $('nav').on('submit', '.show-servants', onIndex)
  $('section').on('submit', '.show-servant', onGetServant)
  $('section').on('click', '.delete-button', onDeleteServant)
}

module.exports = {
  onCreateServant,
  onDeleteServant,
  addHandlers
}
