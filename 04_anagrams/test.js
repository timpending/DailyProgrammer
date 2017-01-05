const {expect} = require('chai');
const anagram = require('./anagram');

describe('example test', () => {
  it('pass true when true', () => {
    expect(anagram("pameesxl","examples")).to.be.true;
  });
});

describe('false test', () => {
  it('passes false', () => {
    expect(anagram("abb", "ab")).to.be.false;
  });
});

describe('true test', () => {
  it('passes true', () => {
    expect(anagram("cab", "abc")).to.be.true;
  });
});

describe('samesies', () => {
  it('returns exception string', () => {
    expect(anagram("cab", "cab")).to.deep.equal(
      "There is an error with one of your strings. Alpha characters only, non-identical strings, and no empty strings please!"
    )
  });
});

describe('empty string', () => {
  it('returns exception string', () => {
    expect(anagram("123", "")).to.deep.equal(
      "There is an error with one of your strings. Alpha characters only, non-identical strings, and no empty strings please!"
    )
  });
});
