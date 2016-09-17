var should = require('chai').should();
var assert = require('chai').assert;

var createInjector = require('../injector');

describe('Test naive dependency injection', function() {

  var injector;
  beforeEach(function() {
    injector = createInjector();
  });

  it('should inject literal object', function() {
    injector.inject('book', {pageNumber: 10});
    var book = injector.get('book');
    // book.should.be.a('object');
    assert.equal(book.pageNumber, 10);
    // assert.equal(injector.get('book').pageNumber, 10);
  });

  it('should inject by factory function', function() {
  });

  it('should inject dependencies in array', function() {
  });

  it('should inject dependencies', function() {
  });

  it('should inject by reflection', function() {
  });

  it('should inject by provider', function() {
  });

});