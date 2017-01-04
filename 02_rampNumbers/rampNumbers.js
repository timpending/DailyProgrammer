function RampTest(){};

RampTest.prototype.rampTest = function(int) {
  return Number(int.toString().split('').sort().join('')) === int
};

module.exports = RampTest
