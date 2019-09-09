'use strict'

const store = require('../store')
const signInFormTemplate = require('../templates/sign-in.handlebars')
const navTemplate = require('../templates/navbar.handlebars')
const changePwTemplate = require('../templates/change-pw.handlebars')

const frontPage = signInFormTemplate()

const signUpSuccess = () => {
  $('#message').text('Successful sign-in ')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signInSuccess = (data) => {
  store.user = data.user

  $('section').html('')
  $('nav').html(navTemplate())
  $('form').trigger('reset')
  $('#message').text('Successful sign-in ')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const goChangePassword = () => {
  $('section').html(changePwTemplate())
}

const changePasswordSuccess = () => {
  $('#message').text('Successfully changed password')
  $('#message').removeClass()
  $('#message').addClass('success') // optional for css styling
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('section').html(frontPage)
  $('nav').html('')
  $('#message').text('Successfully signed out')
  $('#message').removeClass()
  $('#message').addClass('success')
  store.user = null
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
  goChangePassword,
  failure
}
