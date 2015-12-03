function palindrome(str) {
    var reversed = str.split('').reverse().join('');
    if (str === reversed) {
    console.log(str, " is a palindrome!")
    } else {
        console.log(str, "is not a palindrome!")
    }
}
