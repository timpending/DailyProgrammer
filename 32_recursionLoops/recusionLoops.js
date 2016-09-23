var fizzBuzz = function() {
  let count = 1;
  for (let i=1; i<31; i++){
    if (i % 3 == 0 & i % 5 == 0){
      console.log('FizzBuzz');
    } else if (i%5 == 0){
      console.log('Buzz');
    } else if (i%3 == 0){
      console.log('Fizz');
    }
    console.log(i);
  }
}

// fizzBuzz();

var count=1;
var fizzBuzz = function(end){
  let start = 1;
  // SET END OF LOOP HERE AT COUNT
  if (count==30){
    return 'FizzBuzz'
  } else {
    if (count%3==0 && count%5==0){
      return 'FizzBuzz ' + fizzBuzz(count++)
    } else if (count%3==0){
      return 'Fizz '+ fizzBuzz(count++)
    }else if (count%5==0){
      return 'Buzz '+ fizzBuzz(count++)
    }
    return count + ' ' + fizzBuzz(count++)
  }
}

var fizzBuzz = function(end, i){
  // SET END OF LOOP HERE AT COUNT
  if (i==end+1){
    return ''
  } else {
    if (i%3==0 && i%5==0){
      return 'FizzBuzz ' + fizzBuzz(end, i+1)
    } else if (i%3==0){
      return 'Fizz '+ fizzBuzz(end, i+1)
    }else if (i%5==0){
      return 'Buzz '+ fizzBuzz(end, i+1)
    }
    return i + ' ' + fizzBuzz(end, i+1)
  }
}


console.log(fizzBuzz(30, 1));
