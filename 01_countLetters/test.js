const {expect} = require('chai')
const letterCount = require('./count-letters.js')

describe('Hello Object', ()=>{
  it('Count Letters and return correct object',  ()=> {
    let string = "hello";
    expect(letterCount(string)).to.deep.equal(
      { 'h':1, 'e': 1, 'l':2, 'o':1}
    );
  });
});

describe('Full Alphabet Test',()=>{
  it('Count Letters and return correct object',()=> {
    let string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";

    expect(letterCount(string)).to.deep.equal(
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
