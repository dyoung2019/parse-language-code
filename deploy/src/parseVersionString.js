const removeOperand = require('./removeOperand')
const selectVersion = require('./selectHigherVersion')

function parseVersionString(value) {
  const [left, right] = value.split(' ')

  const lhs = removeOperand(left)
  const rhs =  removeOperand(right)

  if (!!lhs && !rhs) {
    return lhs
  } else {
    return selectVersion(lhs, rhs)
  }
}

module.exports = parseVersionString