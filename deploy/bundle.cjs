const esBuild = require('esbuild')
const getAllNodeTargets = require('./src/getAllNodeTargets')
const readPackageConfig = require('./src/readPackageConfig')
const getSingleNodeTarget = require('./src/getSingleNodeTarget')

const config = readPackageConfig()

const nodeValue = config.engines.node

esBuild.buildSync({
  entryPoints: ['./build/index.js'],
  bundle: true,
  platform: 'node',
  minify: true,
  target: getAllNodeTargets(nodeValue),
  outfile: './dist/index.js',
})