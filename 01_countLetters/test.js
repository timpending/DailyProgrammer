var expect = require('chai').expect;
var LetterCount = require('./count-letters')

describe('Hello Object', function(){
  it('Count Letters and return correct object', function () {
    var letterCount = new LetterCount();
    let string = "hello";
    expect(letterCount.letterCountObj(string)).to.deep.equal(
      { 'h':1, 'e': 1, 'l':2, 'o':1}
    );
  });
});

describe('Full Alphabet Test', function(){
  it('Count Letters and return correct object', function () {
    var letterCount = new LetterCount();
    let string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";

    expect(letterCount.letterCountObj(string)).to.deep.equal(
      { 't': 5,
      'h': 4,
      'e': 8,
      'q': 1,
      'u': 2,
      'i': 3,
      'c': 2,
      'k': 1,
      'b': 1,
      'r': 3,
      'o': 4,
      'w': 1,
      'n': 4,
      'f': 1,
      'x': 1,
      'j': 1,
      'm': 1,
      'p': 2,
      's': 2,
      'v': 1,
      'l': 3,
      'a': 5,
      'z': 1,
      'y': 3,
      'd': 3,
      'g': 2 }
    );
  });
});
