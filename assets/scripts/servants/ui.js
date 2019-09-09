'use strict'

const servantsTemplate = require('../templates/servants.handlebars')
const createServantTemplate = require('../templates/new-servant.handlebars')
const showServantTemplate = require('../templates/show-servant.handlebars')

const onIndexSuccess = (data) => {
  const showServants = servantsTemplate({ servants: data.servants })
  $('section').html(showServants)
}

const onShowSuccess = (data) => {
  const showServant = showServantTemplate({ servant: data.servant })
  $('section').html(showServant)
}
const onCreateSuccess = responseData => {
  $('#message')
    .text('Servant created')
    .css('color', 'green')
  $('form').trigger('reset')
}

const goCreateServant = () => {
  $('section').html(createServantTemplate())
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
  // onDestroySuccess,
  onCreateSuccess,
  // onUpdateSuccess,
  goCreateServant,
  failure
}
