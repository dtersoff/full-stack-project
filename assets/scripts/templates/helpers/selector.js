'use strict'
const store = require('../../store')

const selector = (dropValue) => {
  // TODO: figure out why the strings from the seed data aren't matching the strings from the stored array
  if (typeof dropValue === 'number') {
    return dropValue === store.currentServant.rarity
  } else {
    return store.sort.normalString(dropValue) === store.sort.normalString(store.currentServant.sclass)
  }
}

module.exports = selector
