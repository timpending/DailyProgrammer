const sortLength = (array) => array.sort((a, b) => a.length < b.length)
const format = (str) => {return {[str]: str.length}}
const longestString = (strArray) => format(sortLength(strArray)[0])

console.log(longestString(['truck', 'sidewalk', 'book']))
