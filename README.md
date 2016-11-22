# x-is-ducktype-array
x is an array that contains only elements of given ducktype

# usage
`npm install x-is-ducktype-array`

```js
  var xString = require('x-is-string')

  var xDTypeArray = require('x-is-ducktype-array')

  xDTypeArray(xString, []) // => true
  xDTypeArray(xString, ['']) // => true

  xDTypeArray(xString, ['', {}]) // => false
  xDTypeArray(xString, {}) // => false
```


# related
a list of other `x-is-...` modules can be found at
* [x-is](https://www.npmjs.com/package/x-is)
