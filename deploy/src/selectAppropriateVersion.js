const removeOperand = require('./removeOperand')
const getHigherVersion = require('./getHigherVersion')

function selectAppropriateVersion(value) {
  const [left, right] = value.split(' ')

  const lhs = removeOperand(left)
  const rhs =  removeOperand(right)

  if (!!lhs && !rhs) {
    return lhs
  } else {
    return getHigherVersion(lhs, rhs)
  }
}

module.exports = selectAppropriateVersion