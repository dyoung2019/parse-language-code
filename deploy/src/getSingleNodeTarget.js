const parseVersion = require('./selectAppropriateVersion')
const prependNodePrefix = require('./prependNodePrefix')

function getSingleNodeTarget(config) {
  const nodeValue  = parseVersion(config)
  return [prependNodePrefix(nodeValue)]
}

module.exports = getSingleNodeTarget