function stripVersionString(str) {
  if (!str) return null

  return str.split('.').map(x => parseInt(x, 10))
}

module.exports = stripVersionString