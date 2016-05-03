<<<<<<< HEAD
var parensChecker = require('../solutions/bj.js');
=======
var parensChecker = require('../solutions/ek.js');
>>>>>>> a1b77c1394668eb4f070fa127caba940f80f1909
var assert = require('assert');

describe('Parentheses Checker', function() {

  it('should check if all parens are closed', function() {
    assert(parensChecker("()(((())))") === true);
    assert(parensChecker("())))(") === false);
    assert(parensChecker(")(") === false);
  });

});
