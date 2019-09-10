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

const onGoChangePassword = event => {
  event.preventDefault()
  ui.goChangePassword()
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
  $('.main-content').on('submit', '.sign-up', onSignUp)
  $('.main-content').on('submit', '.sign-in', onSignIn)
  $('.main-content').on('submit', '.change-password', onChangePassword)
  $('nav').on('submit', '#sign-out', onSignOut)
  $('nav').on('submit', '.change-pw', onGoChangePassword)
}
module.exports = {
  addHandlers
}
