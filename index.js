function chainable(methods, context, onDone) {
  
  var ops = [];
  
  function chain() {
    onDone.apply(onDone,
      [ops, context || null].concat(
        [].slice.call(arguments)
      )
    );
  }
  
  methods.forEach(function(method) {
    chain[method] = function() {
      ops.push({ 
        method: method, 
        args: [].slice.call(arguments)
      });
      return chain;
    }
  });
  
  return chain;
}

exports = module.exports = chainable;