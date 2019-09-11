'use strict'
const store = require('../store')
const servantsTemplate = require('../templates/servants.handlebars')
const createServantTemplate = require('../templates/new-servant.handlebars')
const showServantTemplate = require('../templates/show-servant.handlebars')
const updateServantTemplate = require('../templates/update-servant.handlebars')

// nav success methods
const onIndexSuccess = (data) => {
  const showServants = servantsTemplate({ servants: data.servants })
  $('.main-content').html(showServants)
}

const onShowUpdate = () => {
  const showUpdate = updateServantTemplate({ servant: store.currentServant })
  $('.main-content').html(showUpdate)
}

// sort success methods
const onSortByAttackSuccess = (data) => {
  const sort = data.servants.sort((a, b) => (a.atk > b.atk) ? -1 : 1)
  const showServants = servantsTemplate({ servants: sort })
  $('.main-content').html(showServants)
}

const onSortByHealthSuccess = (data) => {
  const sort = data.servants.sort((a, b) => (a.hp > b.hp) ? -1 : 1)
  const showServants = servantsTemplate({ servants: sort })
  $('.main-content').html(showServants)
}

const onSortByClassSuccess = (data) => {
  const sort = store.sort.sortClass(data.servants)
  const showServants = servantsTemplate({ servants: sort })
  $('.main-content').html(showServants)
}

const onSortByBalanceSuccess = (data) => {
  const sort = store.sort.doubleSort(data.servants)
  const showServants = servantsTemplate({ servants: sort })
  $('.main-content').html(showServants)
}

// CRUD success methods
const onShowSuccess = (data) => {
  const showServant = showServantTemplate({ servant: data.servant })
  $('.main-content').html(showServant)
  store.currentServant = data.servant
  console.log(data.servant)
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
  onShowUpdate()
}

const goCreateServant = () => {
  $('.main-content').html(createServantTemplate())
}

const failure = () => {
  $('#message').text('Failed operation')
  $('#message').removeClass()
  $('#message').addClass('failure') // optional for css styling
  $('form').trigger('reset')
}
module.exports = {
  onIndexSuccess,
  onSortByAttackSuccess,
  onSortByHealthSuccess,
  onSortByClassSuccess,
  onSortByBalanceSuccess,
  onShowSuccess,
  onCreateSuccess,
  onUpdateSuccess,
  goCreateServant,
  onShowUpdate,
  failure
}
