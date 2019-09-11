'use strict'
const store = require('../../store')

const selector = (dropValue) => {
  if (typeof dropValue === 'number') {
    return dropValue === store.currentServant.rarity
  } else {
    return dropValue === store.currentServant.sclass
  }
}

module.exports = selector
