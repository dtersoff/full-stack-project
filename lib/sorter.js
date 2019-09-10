'use strict'

const Sorter = function () {
  this.classOrder = {
    saber: 1,
    archer: 2,
    lancer: 3,
    rider: 4,
    caster: 5,
    assassin: 6,
    berserker: 7,
    ruler: 8,
    avenger: 9,
    alterego: 10,
    mooncancer: 11,
    shielder: 12
  }
}

Sorter.prototype.normalString = function (className) {
  return className.replace(/\s/g, '').toLowerCase()
}

Sorter.prototype.sortClass = function (servantArray) {
  const sorted = servantArray.sort((a, b) => {
    if (this.classOrder[this.normalString(a.sclass)] > this.classOrder[this.normalString(b.sclass)] ||
  a.rarity > b.rarity || a.name > b) {
      return 1
    } else if (a.rarity > b.rarity) {
      return 1
    } else if (a.name > b.name) {
      return 1
    } else {
      return -1
    }
  })
  return sorted
}

module.exports = {
  Sorter: Sorter
}
