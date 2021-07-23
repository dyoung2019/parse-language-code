const prependNodePrefix = require('./prependNodePrefix')
const removeOperand = require('./removeOperand')

function getVersionStrings(value) {
  return value.split(' ')
    .map(removeOperand)
    .map(prependNodePrefix)
}

module.exports = getVersionStrings