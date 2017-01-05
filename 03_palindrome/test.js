const {expect} = require('chai');
const palindrome = require('./palindrome.js');

describe('hello', function(){
  it('returns false', function () {
    expect(palindrome('hello')).to.be.false;
  });
});

describe('race car', function(){
  it('returns false', function () {
    expect(palindrome('race car')).to.be.true;
  });
});

describe('Amor, Roma', function(){
  it('returns true, ignores comma', function () {
    expect(palindrome('Amor, Roma')).to.be.true;
  });
});

describe('A man, a plan, a canal, Panama!', function(){
  it('returns true, ignores punctuation', function () {
    expect(palindrome('A man, a plan, a canal, Panama!')).to.be.true;
  });
});

describe("No 'x' in Nixon", function(){
  it('returns true, ignores comma, UpperCase N', function () {
    expect(palindrome('Amor, Roma')).to.be.true;
  });
});
