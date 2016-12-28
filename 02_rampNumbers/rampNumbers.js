function rampTest(int) {
  return Number(int.toString().split('').sort().join('')) === int
}

// Goal: Test numbers from left to right to see if the one next is higher than then previous one
// Input: Integer **(no leading zero's)**
// Output: Return true if ramp number; else return false

// Sort integers
// Test if sorted integers changed back to a Number is equal to the original integer


// True's
console.log(rampTest(12345));
console.log(rampTest(1122334455));
console.log(rampTest(12349));

// False's
console.log(rampTest(12354));
console.log(rampTest(12340));
console.log((rampTest(554411)));
