function anagramTest(x, y){
  if (x && y && x !== y && x.length!==0 && y.length !== 0) {
      return x.replace(/[^a-z]/ig, "").toLowerCase().split("").sort().join("") === y.replace([/[^a-z]/ig], "").toLowerCase().split("").sort().join("")
    } else {
      return "There is an error with one of your strings. Alpha characters only, non-identical strings, and no empty strings please!"
    }
}


console.log(anagramTest("pameesxl","examples"));
console.log(anagramTest("abb", "ab"))
console.log(anagramTest("cab", "abc"));
console.log(anagramTest("cab", "cab"));
console.log(anagramTest("123", ""));
