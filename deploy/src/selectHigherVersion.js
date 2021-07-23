const splitVersion = require('./splitVersionString')

function selectHigherVersion(lhs, rhs) {
  const lhsVersion = splitVersion(lhs)
  const rhsVersion = splitVersion(rhs)

  const noOfPlaces = Math.max(lhsVersion.length, rhsVersion.length)  

  for (let i = 0; i < noOfPlaces; i += 1) {
    const left = lhsVersion[i]
    const right = rhsVersion[i]

    if (left > right) {
      return lhs
    } else if (left < right) {
      return rhs
    }
  }
  // equal
  return lhs
}

module.exports = selectHigherVersion