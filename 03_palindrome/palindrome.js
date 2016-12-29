// Input: string
// Ouput: Boolean
// Stipulations: N/A

// Strip spaces, punctuation, numbers.  KEEP ONLY LETTERS.
// turn letters to lower case to eliminate case inequality
// Split edited string into array, reverse order, join
// test if reversed,joined array is equal to edited string

function palindrome(string){
  let stripString = string.match(/[a-zA-Z]+/g).join('').toLowerCase();
  let reverseString = stripString.split('').reverse().join('').toLowerCase();
  return stripString === reverseString
}


console.log(palindrome('hello'));
console.log(palindrome('race car'));
console.log(palindrome('Amor, Roma'));
console.log(palindrome('A man, a plan, a canal, Panama!'));
console.log(palindrome('stack cats'));
console.log(palindrome('taco cat'));
console.log(palindrome('step on no pets'));
console.log(palindrome('Was it a car or a cat I saw?'));
console.log(palindrome("No 'x' in Nixon"));
console.log(palindrome('put it up'));
