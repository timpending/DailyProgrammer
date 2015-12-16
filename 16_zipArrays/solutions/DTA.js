/* Created by David Adams December 16 2015 */
function zipArrays(arr1, arr2) {
  var retArr = [];

  if (arr2.length < arr1.length) {
    //arr2 is smaller, swap arr2 and arr1.
    var temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }

  for (var i = 0; i < arr1.length; i++) {
    retArr.push(arr1[i]);
    retArr.push(arr2[i]);
  }

  return retArr.concat(arr2.slice(i));
}

console.log(zipArrays([1,2,3], [4,5,6]));       //[1,4,2,5,3,6]
console.log(zipArrays([1,2], [3,4,5,6,7]));     //[1,3,2,4,5,6,7]
console.log(zipArrays([1,2,3,4,5], [6,7]));     //[1,6,2,7,3,4,5]
