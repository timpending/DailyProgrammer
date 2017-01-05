const {expect} = require('chai');
const longestString = require('./longestString.js');

describe('Test 1', ()=>{
  it('returns {taco:4}', ()=>{
      let array = ['tim', 'taco', 'it'];
      expect(longestString(array)).to.deep.equal({'taco':4});
  })
});

describe('Test 2', ()=>{
  it('returns {sidewalk:8}', ()=>{
      let array = ["truck", "sidewalk", "book"];
      expect(longestString(array)).to.deep.equal({'sidewalk':8});
  })
});
