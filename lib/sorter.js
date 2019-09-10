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
  // sorts by name, then by rarity, then by class as separate sorts in order to
  // get a final result of class as the primary criterium, rarity as the
  // secondary, and name as the tertiary
  // TODO: figure out how to make this work as one sort function.

  let sorted = servantArray.sort((a, b) => b.name - a.name)
  sorted = sorted.sort((a, b) => a.rarity - b.rarity)

  // converts class name to match the keys provided in the classOrder object
  // then uses those strings to get the value assigned in the classOrder object
  // and sorts by that.
  sorted = sorted.sort((a, b) => {
    if (this.classOrder[this.normalString(a.sclass)] > this.classOrder[this.normalString(b.sclass)]) {
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
