function combineAndSort(array1, array2) {
  return array1.concat(array2).sort(function(word1, word2) {
    return word1 > word2;
  });
}

console.log(combineAndSort([ "cat", "dog", "fish", "zebra" ], [ "lion", "aardvark", "gorilla" ]));
