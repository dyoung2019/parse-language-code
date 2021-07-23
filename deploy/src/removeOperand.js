function removeOperand(str) {
  if (!str) return null

  return str.split(/[<>=^]/).join('')
}

module.exports = removeOperand