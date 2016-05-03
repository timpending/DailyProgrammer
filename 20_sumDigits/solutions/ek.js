// Created by Elana Kopelevich

var input = 12345;

function sumDigits(num){
  var sum = 0;
  num = num.toString();
  if (num.length > 1){
    for (var i = 0; i < num.length; i++) {
      sum = sum + parseInt(num[i]);
    }
    num = sum;
    sumDigits(num);
  }
  console.log('sum: ', sum);
}

sumDigits(input);
