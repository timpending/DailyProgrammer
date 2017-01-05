// INPUT: array of strings
// OUTPUT: Type - Object
// Key - longest string in array ... Value - Length(number) of that string
// If tied, then it will overwrite to the latest word in the array

const longestString = (array) => {
  let obj = {};
  let kingIndex = 0;
  array.forEach((word, index) => {
    if (word.length>= array[kingIndex].length){
      kingIndex = index
    }
  });
  obj[array[kingIndex]] = array[kingIndex].length
  return obj
}

module.exports = longestString;
