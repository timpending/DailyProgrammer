var expect = require('chai').expect;
var Anagram = require('./anagram')

describe('example test', function(){
  it('pass true when true', function () {
    let test = new Anagram();
    expect(test.aTest("pameesxl","examples")).to.be.true;
  });
});

describe('false test', function(){
  it('passes false', function () {
    let test = new Anagram();
    expect(test.aTest("abb", "ab")).to.be.false;
  });
});

describe('true test', function(){
  it('passes true', function () {
    let test = new Anagram();
    expect(test.aTest("cab", "abc")).to.be.true;
  });
});

describe('samesies', function(){
  it('returns exception string', function () {
    let test = new Anagram();
    expect(test.aTest("cab", "cab")).to.deep.equal(
      "There is an error with one of your strings. Alpha characters only, non-identical strings, and no empty strings please!"
    )
  });
});

describe('empty string', function(){
  it('returns exception string', function () {
    let test = new Anagram();
    expect(test.aTest("123", "")).to.deep.equal(
      "There is an error with one of your strings. Alpha characters only, non-identical strings, and no empty strings please!"
    )
  });
});
