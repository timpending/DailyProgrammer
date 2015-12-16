function zipArrays(array1, array2) {
  var zipped = []
  for (var i = 0; i < array1.length; i++) {
    zipped.push(array1[i])
    zipped.push(array2[i])
  }
  return zipped
}

console.log(zipArrays([1,2,3], [4,5,6])) // [1,4,2,5,3,6].
