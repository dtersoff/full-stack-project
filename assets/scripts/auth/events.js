'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make api call
  api.signUp(data)
  // handle success
    .then(ui.signUpSuccess)
    // handle failure
    .catch(ui.failure)
}

const onSignIn = event => {
  // prevent default action
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make api call
  api.signIn(data)
  // handle success
    .then(ui.signInSuccess)
    // handle failure
    .catch(ui.failure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('section').on('submit', '.sign-up', onSignUp)
  $('section').on('submit', '.sign-in', onSignIn)
  $('section').on('submit', '.change-password', onChangePassword)
  $('section').on('submit', '.sign-out', onSignOut)
}
module.exports = {
  addHandlers
}
