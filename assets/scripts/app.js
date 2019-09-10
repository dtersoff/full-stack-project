'use strict'
const signInFormTemplate = require('./templates/sign-in.handlebars')
const authEvents = require('./auth/events')
const servantEvents = require('./servants/events')
const store = require('./store')

const sorterClass = require('../../lib/sorter.js')
const Sorter = sorterClass.Sorter
const sorter = new Sorter()

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const frontPage = signInFormTemplate()
$(() => {
  store.sort = sorter
  $('.main-content').html(frontPage)
  authEvents.addHandlers()
  servantEvents.addHandlers()
})
