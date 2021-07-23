const prependNodePrefix = require('./prependNodePrefix')
const removeOperand = require('./removeOperand')

function getAllNodeTargets(value) {
  return value.split(' ')
    .map(removeOperand)
    .map(prependNodePrefix)
}

module.exports = getAllNodeTargets