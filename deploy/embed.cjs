const esBuild = require('esbuild')
const getAllNodeTargets = require('./src/getAllNodeTargets')
const readPackageConfig = require('./src/readPackageConfig')

const config = readPackageConfig()

const nodeValue = config.engines.node

esBuild.buildSync({
  entryPoints: ['./lib/index.js'],
  bundle: true,
  platform: 'node',
  format:"esm",
  // minify: true,
  target: getAllNodeTargets(nodeValue),
  outfile: './lib/index.embed.js',
})