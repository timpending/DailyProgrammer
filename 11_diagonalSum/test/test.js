var diagnalSum = require('../solutions/ek.js');
var assert = require('assert');

var square4 =

  [[1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]];

var square5 =

  [[2, 5, 1, 3, 9],
  [4, 1, 3, 0, 8],
  [1, 0, 9, 7, 6],
  [1, 7, 7, 3, 0],
  [3, 3, 8, 2, 4]];

describe('Parentheses Checker', function() {

  it('should check if diagnal sums are accurate', function() {
    assert(diagnalSum(square4) === 4);
    assert(diagnalSum(square5) === 19);
  });

});
