var test = require('tape')
var xString = require('x-is-string')

var xDTypeArray = require('./')

test('x-is-ducktype-array', function (t) {
  t.plan(4)

  t.ok(xDTypeArray(xString, []), '(xString, []) => true')
  t.ok(xDTypeArray(xString, [""]), '(xString, [""]) => true')
  console.log()
  t.notOk(xDTypeArray(xString, ["", {}]), '(xString, ["", {}]) => false')
  t.notOk(xDTypeArray(xString, {}), '(xString, {}) => false')
})
