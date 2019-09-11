'use strict'
const store = require('../../store')

const selector = (dropValue) => {
  return dropValue === store.currentServant.sclass
}

module.exports = selector
