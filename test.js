var should = require('chai').should();
var chainable = require('./');

describe('chainable', function() {
  
  it('should create a chainable', function() {
    this.chain = chainable(['one', 'two', 'three']);
    this.chain.should.have.property('one');
    this.chain.should.have.property('two');
    this.chain.should.have.property('three');
    this.chain.one().should.equal(this.chain);
    this.chain.two().should.equal(this.chain);
    this.chain.three().should.equal(this.chain);
  });
  
  it('should record ops', function(done) {
    var context = {};
    
    this.chain = chainable(['rotate', 'move'], context, function(ops, ctx, arg0) {
      ops.should.have.length(4);
      ops[0].should.deep.equal({ method: 'rotate', args: [90] });
      ops[1].should.deep.equal({ method: 'move', args: [10] });
      ops[2].should.deep.equal({ method: 'rotate', args: [270] });
      ops[3].should.deep.equal({ method: 'move', args: [10] });
      context.should.equal(ctx);
      arg0.should.equal('stop!');
      done();
    });
    
    this.chain
      .rotate(90)
      .move(10)
      .rotate(270)
      .move(10)('stop!');
  });
});