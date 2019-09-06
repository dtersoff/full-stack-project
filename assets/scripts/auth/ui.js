'use strict'

const store = require('../store')
const loginPageTemplate = require('../templates/signed-in.handlebars')
const signInFormTemplate = require('../templates/sign-in.handlebars')

const loginPage = loginPageTemplate()
const frontPage = signInFormTemplate()

const signUpSuccess = () => {
  $('#message').text('Successful sign-in ')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signInSuccess = (data) => {
  store.user = data.user

  $('section').html(loginPage)
  $('form').trigger('reset')
  $('#message').text('Successful sign-in ')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordSuccess = () => {
  $('#message').text('Successfully changed password')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  $('#message').text('Successfully signed out')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('section').html(frontPage)
}

const failure = () => {
  $('#message').text('Failed operation')
  $('#message').removeClass()
  $('#message').addClass('failure') // optional for css styling
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
