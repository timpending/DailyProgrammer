const {expect} = require('chai');
const upDown = require('./upDown.js');

describe('Equality Test from Readme', () => {
  it('returns the correct array of up/down strings', () => {
    let array = [6,3,5,4,3,4,4,5];
    expect(upDown(array)).to.deep.equal(
      [ 'down', 'up', 'down', 'down', 'up', 'even', 'up' ]
    );
  });
});
