// # Zip Arrays
//
// Implement a function which takes two parameters, both of which are arrays, and zips them together.
//
// ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].
//
// # Inputs
//
// 2 Arrays
// ```js
// zipArrays([1,2,3], [4,5,6]);
// ```
//
// # Outputs
//
// 1 Array - result of zipping the 2 arrays
//
// ```sh
// [1,4,2,5,3,6]
// ```

var arr1 = [1,2,3]
var arr2 = [4,5];
var output = [];
// For Each Using the Index to push 2nd array, no undefined control
var zip = function(arr1, arr2){
  arr1 = arr1.slice(0, Math.min(arr1.length, arr2.length))
  arr2 = arr2.slice(0, Math.min(arr1.length, arr2.length))
  arr1.forEach(function(item, index){
    output.push(item)
    output.push(arr2[index])
  })
  return output
}

// For loop with Ternary for length
// var zip = function(array1, array2) {
//   let output = [];
//   let length = array1.length<=array2.length ? array1.length : array2.length
//   for (let i=0; i<length; i++){
//         output.push(array1[i], array2[i]);
//       }
//     return output
//   }
console.log(zip(arr1, arr2));
