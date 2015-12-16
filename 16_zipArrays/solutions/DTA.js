/* Created by David Adams December 16 2015 */
function zipArrays(arr1, arr2) {
  var retArr = [];

  if (arr1.length < arr2.length) {
    //arr1 is smaller
    for (var i = 0; i < arr1.length; i++) {
      retArr.push(arr1[i]);
      retArr.push(arr2[i]);
    }

    //append rest of arr2
    retArr = retArr.concat(arr2.slice(i));
  }
  else if (arr1.length > arr2.length) {
    //arr2 is smaller
    for (var i = 0; i < arr2.length; i++) {
      retArr.push(arr1[i]);
      retArr.push(arr2[i]);
    }

    //append rest of arr1
    retArr = retArr.concat(arr1.slice(i));
  }
  else {
    //arr1 length == arr2 length
    for (var i = 0; i < arr1.length; i++) {
      retArr.push(arr1[i]);
      retArr.push(arr2[i]);
    }
  }

  return retArr;
}

console.log(zipArrays([1,2,3], [4,5,6]));       //[1,4,2,5,3,6]
console.log(zipArrays([1,2], [3,4,5,6,7]));     //[1,3,2,4,5,6,7]
console.log(zipArrays([1,2,3,4,5], [6,7]));     //[1,6,2,7,3,4,5]
