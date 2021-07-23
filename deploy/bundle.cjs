const esBuild = require('esbuild')
const getVersionStrings = require('./src/getVersionStrings')
const readPackageConfig = require('./src/readPackageConfig')
const parseVersion = require('./src/parseVersionString')

const config = readPackageConfig()

console.log(getVersionStrings(config.engines.node))

// esBuild.buildSync({
//   entryPoints: ['./build/index.js'],
//   bundle: true,
//   minify: true,ß
//   target: ['node10.4'],
//   outfile: './dist/index.js',
// })