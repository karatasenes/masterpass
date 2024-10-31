
'use strict'
console.log("encrypt")
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./masterpass-sdk.cjs.development.js')

} else {
  module.exports = require('./masterpass-sdk.cjs.development.js')
}
