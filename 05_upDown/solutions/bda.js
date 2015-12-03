function path(array) {
  return array.slice(1).map(function(element, i) {
    var difference = element - array[i];
    if (difference > 0) return 'up';
    else if (difference < 0) return 'down';
    else return 'even'
  });
}

console.log(path([6,3,5,4,3,4,4,5]));
