const parseVersion = require('./parseVersionString')
const prependNodePrefix = require('./prependNodePrefix')

function extractNodeTarget(config) {
  const nodeValue  = parseVersion(config.engines.node)
  return prependNodePrefix(nodeValue)
}

module.exports = extractNodeTarget