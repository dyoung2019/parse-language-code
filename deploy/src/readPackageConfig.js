const fs = require('fs')

function readPackageConfig() {
  return JSON.parse(fs.readFileSync('./package.json'))
}

module.exports = readPackageConfig