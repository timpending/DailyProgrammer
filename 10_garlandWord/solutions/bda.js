// function garland(word) {
//   for (var i = word.length - 1; i > 0; i--) {
//     if (word.substr(0, i) === word.substr(word.length - i)) {
//       return i;
//     }
//   }
//   return i;
// }

function garland(word) {
  if (word === arguments[1]) return word.length;
  var word2 = arguments[1] || word;
  var len = word.length - 1;
  return garland(word.substr(0, len), word2.substr(word2.length - len));
}


[ garland('programmer'),
  garland('ceramic'),
  garland('onion'),
  garland('alfalfa'),
  garland('hotshots'),
  garland('abracadabra'),
  garland('couscous')]
    .forEach(function(answer) { console.log(answer); });
