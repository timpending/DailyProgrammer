const upDown = (array) => {
  let output = array.map( (x, index) => {
      let curr = x
      let prev = array[index-1]

      if (prev > curr) {return 'down'}
      if (prev < curr) {return 'up'}
      if (prev === curr) {return 'even'}
  })
  return output.slice(1)
}


console.log(upDown([6,3,5,4,3,4,4,5]));
