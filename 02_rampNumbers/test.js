const {expect} = require('chai')
const rampTest = require('./rampNumbers.js');

// TRUES

describe('Test #1', () => {
  it('passes true', () => {
    expect(rampTest(12345)).to.deep.equal(true);
  });
});

describe('Test #2', () => {
  it('passes true', () => {
    expect(rampTest(1122334455)).to.deep.equal(true);
  });
});

describe('Test #3', () => {
  it('passes true', () => {
    expect(rampTest(12349)).to.deep.equal(true);
  });
});


// FALSE
describe('Test #4', () => {
  it('passes false', () => {
    expect(rampTest(12354)).to.deep.equal(false);
  });
});
describe('Test #5', () => {
  it('passes false', () => {
    expect(rampTest(12340)).to.deep.equal(false);
  });
});
describe('Test #6', () => {
  it('passes false', () => {
    expect(rampTest(554411)).to.deep.equal(false);
  });
});
