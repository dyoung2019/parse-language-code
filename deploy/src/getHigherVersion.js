const compareIntArrays = require('./compareIntArrays')
const splitVersion = require('./splitVersionString')

function getHigherVersion(lhs, rhs) {
  const lhsVersion = splitVersion(lhs)
  const rhsVersion = splitVersion(rhs)

  const result = compareIntArrays(lhsVersion, rhsVersion)

  if (result === 1) {
    return rhs
  } else {
    return lhs
  }
}

module.exports = getHigherVersion