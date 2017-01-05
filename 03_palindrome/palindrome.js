// Input: string
// Ouput: Boolean
// Stipulations: N/A

// Strip spaces, punctuation, numbers.  KEEP ONLY LETTERS.
// turn letters to lower case to eliminate case inequality
// Split edited string into array, reverse order, join
// test if reversed,joined array is equal to edited string

const palindrome = function(string){
  let stripString = string.match(/[a-zA-Z]+/g).join('').toLowerCase();
  let reverseString = stripString.split('').reverse().join('').toLowerCase();
  return stripString === reverseString
}

module.exports = palindrome;
