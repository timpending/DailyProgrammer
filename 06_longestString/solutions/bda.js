// created by Ben

function longestString(array) {
  var answer = array.sort(function(word1, word2) {
    return word2.length - word1.length;
  })[0];
  var ret = {};
  ret[answer] = answer.length;
  return ret;
}

console.log(longestString(["truck", "sidewalk", "book"]));
console.log(longestString(["long", "shortest", "nonsense", "onomatopoeia"]));
