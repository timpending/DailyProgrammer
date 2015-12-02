function reverse(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(input) {
  if (input == reverse(input)) {
    console.log('Yes you have a palindrome!');
  } else {
    console.log('Sorry, this is not a palindrome');
  }
}

isPalindrome('dog');
