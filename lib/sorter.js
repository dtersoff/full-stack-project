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
  console.log(className.replace(/\s/g, '').toLowerCase())
}

Sorter.prototype.sortClass = function (servantArray) {
  const sorted = servantArray.sort((a, b) => {
    if (a[this.normalString(a.sclass)] > a[this.normalString(b.sclass)]) {
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
