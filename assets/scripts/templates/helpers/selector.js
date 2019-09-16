'use strict'
const store = require('../../store')

const selector = (dropValue) => {
  // console.log(dropValue)
  // console.log(store.currentServant.sclass)
  // console.log(store.sort.normalString(dropValue) === store.sort.normalString(store.currentServant.sclass))
  if (typeof dropValue === 'number') {
    return dropValue === store.currentServant.rarity
  } else {
    return store.sort.normalString(dropValue) === store.sort.normalString(store.currentServant.sclass)
  }
}

module.exports = selector
