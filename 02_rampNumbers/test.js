var expect = require('chai').expect;
var RampTest = require('./rampNumbers');

// TRUES

describe('Test #1', function(){
  it('passes true', function () {
    let test = new RampTest();
    expect(test.rampTest(12345)).to.deep.equal(true);
  });
});

describe('Test #2', function(){
  it('passes true', function () {
    let test = new RampTest();
    expect(test.rampTest(1122334455)).to.deep.equal(true);
  });
});

describe('Test #3', function(){
  it('passes true', function () {
    let test = new RampTest();
    expect(test.rampTest(12349)).to.deep.equal(true);
  });
});


// FALSE
describe('Test #4', function(){
  it('passes false', function () {
    let test = new RampTest();
    expect(test.rampTest(12354)).to.deep.equal(false);
  });
});
describe('Test #5', function(){
  it('passes false', function () {
    let test = new RampTest();
    expect(test.rampTest(12340)).to.deep.equal(false);
  });
});
describe('Test #6', function(){
  it('passes false', function () {
    let test = new RampTest();
    expect(test.rampTest(554411)).to.deep.equal(false);
  });
});
