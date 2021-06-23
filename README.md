# weak-value-map

A Javascript/ECMAScript map using weak references to values.

## Example

```js
import WeakValueMap from "../weak-value-map/index.js"
const wvm = new WeakValueMap

let obj = { a: 'x' }
wvm.set(42, obj)
wvm.get(42) // #=> { a: 'x' }

obj = undefined
wvm.get(42) // #=> { a: 'x' }

// GC happens...
wvm.get(42) // #=> undefined
[...wvm.keys()].includes(42) // #=> false
```

## References

* [WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
* [FinalizationRegistry](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
