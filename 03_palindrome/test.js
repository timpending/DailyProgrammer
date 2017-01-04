var expect = require('chai').expect;
var Palindrome = require('./palindrome')

describe('hello', function(){
  it('returns false', function () {
    let test = new Palindrome();
    expect(test.pTest('hello')).to.be.false;
  });
});

describe('race car', function(){
  it('returns false', function () {
    let test = new Palindrome();
    expect(test.pTest('race car')).to.be.true;
  });
});

describe('Amor, Roma', function(){
  it('returns true, ignores comma', function () {
    let test = new Palindrome();
    expect(test.pTest('Amor, Roma')).to.be.true;
  });
});

describe('A man, a plan, a canal, Panama!', function(){
  it('returns true, ignores punctuation', function () {
    let test = new Palindrome();
    expect(test.pTest('A man, a plan, a canal, Panama!')).to.be.true;
  });
});

describe("No 'x' in Nixon", function(){
  it('returns true, ignores comma, UpperCase N', function () {
    let test = new Palindrome();
    expect(test.pTest('Amor, Roma')).to.be.true;
  });
});
