'use strict'
const store = require('../store')
const servantsTemplate = require('../templates/servants.handlebars')
const createServantTemplate = require('../templates/new-servant.handlebars')
const showServantTemplate = require('../templates/show-servant.handlebars')
const updateServantTemplate = require('../templates/update-servant.handlebars')

const onIndexSuccess = (data) => {
  const showServants = servantsTemplate({ servants: data.servants })
  $('section').html(showServants)
}

const onShowSuccess = (data) => {
  const showServant = showServantTemplate({ servant: data.servant })
  $('section').html(showServant)
  store.currentServant = data.servant
}

const onCreateSuccess = responseData => {
  $('#message')
    .text('Servant created')
    .css('color', 'green')
  $('form').trigger('reset')
}

const onUpdateSuccess = (data) => {
  $('#message')
    .text('Servant updated')
    .css('color', 'green')
  $('form').trigger('reset')
  store.currentServant = data.servant
}

const goCreateServant = () => {
  $('section').html(createServantTemplate())
}

const onShowUpdate = (data) => {
  const showUpdate = updateServantTemplate({ servant: store.currentServant })
  $('section').html(showUpdate)
}
const failure = () => {
  $('#message').text('Failed operation')
  $('#message').removeClass()
  $('#message').addClass('failure') // optional for css styling
  $('form').trigger('reset')
}
module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onCreateSuccess,
  onUpdateSuccess,
  goCreateServant,
  onShowUpdate,
  failure
}
