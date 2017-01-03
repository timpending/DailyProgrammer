function RampTest(){};

RampTest.prototype.rampTest = function(int) {
  return Number(int.toString().split('').sort().join('')) === int
};


// True's
// console.log(rampTest(12345));
// console.log(rampTest(1122334455));
// console.log(rampTest(12349));
//
// // False's
// console.log(rampTest(12354));
// console.log(rampTest(12340));
// console.log((rampTest(554411)));

module.exports = RampTest
