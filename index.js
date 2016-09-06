var xArray = require('x-is-array')
module.exports = function xDTypeArray (xDType, x) {
  return xArray(x) && x.reduce(function(b,x){return b&&xDType(x)},1)
}
