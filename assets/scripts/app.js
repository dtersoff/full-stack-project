'use strict'
const signInFormTemplate = require('./templates/sign-in.handlebars')
const authEvents = require('./auth/events')
const servantEvents = require('./servants/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const frontPage = signInFormTemplate()
$(() => {
  $('section').html(frontPage)
  authEvents.addHandlers()
  servantEvents.addHandlers()
})
