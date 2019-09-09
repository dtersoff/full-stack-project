'use strict'

const servantsTemplate = require('../templates/servants.handlebars')
const createServantTemplate = require('../templates/new-servant.handlebars')

const onIndexSuccess = (data) => {
  console.log('we did it!')
  const showServants = servantsTemplate({ servants: data.servants })
  $('section').html(showServants)
}

const onShowSuccess = (data) => {
  console.log(data)
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
