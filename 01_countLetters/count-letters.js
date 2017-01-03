function LetterCount() {};

LetterCount.prototype.letterCountObj = function(str) {
  str = str.replace(/\W/g, '').replace(/[0-9]+/g, '').toLowerCase();

  let obj = {}
  for (let i=0; i<str.length; i++){
    if (obj[str.charAt(i)]){
      obj[str.charAt(i)]++
    } else {
      obj[str.charAt(i)] = 1
    }
  }
  return obj
}

let string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

module.exports = LetterCount;
