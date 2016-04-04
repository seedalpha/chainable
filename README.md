# seed-chainable

generic chainable interface as a lib

### Installation

    $ npm install seed-chainable --save

### Usage

```javascript

var chainable = require('seed-chainable');

var methods = ['find', 'limit', 'offset']
var context = {};

fuction onDone(ops, context, ...args) {
  console.log(ops, context, ...args);
  /**
   * [
   *   { method: 'find', args: [{ x: 5, y: 10 }] },
   *   { method: 'find', args: [{ z: 10 }] },
   *   { method: 'limit', args: [10] },
   *   { method: 'offset', args: [5] },
   * ],
   * {},
   * 'done!'
   */
}

var chain = chainable(methods, context, onDone);

chain = chain
  .find({ x: 5, y: 10 })
  .find({ z: 10 })
  .limit(10)
  .offset(5);

chain('done!');
```

### Author

Vladimir Popov <vlad@seedalpha.net>

### License

MIT