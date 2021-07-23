function compareIntArrays(lhsVersion, rhsVersion) {
  const noOfPlaces = Math.max(lhsVersion.length, rhsVersion.length)

  for (let i = 0; i < noOfPlaces; i += 1) {
    const left = lhsVersion[i]
    const right = rhsVersion[i]

    if (left > right) {
      return -1
    } else if (left < right) {
      return 1
    }
  }
  // equal
  return 0
}

module.exports = compareIntArrays