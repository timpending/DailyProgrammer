var diagonals =
  [
    [ 1, 2, 3, 4, 5, 6 ],
    [ 4, 5, 6, 7, 8, 9 ],
    [ 7, 8, 9, 1, 2, 3 ],
    [ 1, 2, 3, 4, 5, 6 ],
    [ 4, 5, 6, 7, 8, 9 ],
    [ 7, 8, 9, 1, 2, 3 ]
  ]

sumIt = function(bigArray) {
  let sum = 0
  for (let i=0; i<bigArray.length; i++) {
    sum += bigArray[i][i]
  }
  for (let j=bigArray.length-1; j>=0; j--){
    sum += bigArray[j][j]
  }
  return sum
}

console.log(sumIt(diagonals));
