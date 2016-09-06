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
* [x-is](https://www.npmjs.com/package/x-is)
* [x-is-array](https://www.npmjs.com/package/x-is-array)
* [x-is-object](https://www.npmjs.com/package/x-is-object)
* [x-is-string](https://www.npmjs.com/package/x-is-string)
* [x-is-function](https://www.npmjs.com/package/x-is-function)
* [x-is-empty-object](https://www.npmjs.com/package/x-is-empty-object)
