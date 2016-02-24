/* Created by David Adams February 24 2016 */
var numbers = {
  one: {
    line1: '   ',
    line2: '  |',
    line3: '  |'
  },
  two: {
    line1: ' __',
    line2: ' _|',
    line3: '|__'
  },
  three: {
    line1: '__ ',
    line2: '__|',
    line3: '__|'
  },
  four: {
    line1: '   ',
    line2: '|_|',
    line3: '  |'
  },
  five: {
    line1: ' _ ',
    line2: '|_ ',
    line3: ' _|'
  },
  six: {
    line1: ' _ ',
    line2: '|_ ',
    line3: '|_|'
  },
  seven: {
    line1: '__ ',
    line2: '  |',
    line3: '  |'
  },
  eight: {
    line1: ' _ ',
    line2: '|_|',
    line3: '|_|'
  },
  nine: {
    line1: ' _ ',
    line2: '|_|',
    line3: ' _|'
  },
  zero: {
    line1: ' _ ',
    line2: '| |',
    line3: '|_|'
  }
}

function sevenSegment(num) {
  var numList = num.toString().split('')
  var printSevenSegment = {
    line1: '',
    line2: '',
    line3: ''
  }
  var printOutput = ''

  for(var i = 0; i < numList.length; i++) {
    switch (numList[i]) {
      case '0':
        printSevenSegment.line1 += numbers.zero.line1
        printSevenSegment.line2 += numbers.zero.line2
        printSevenSegment.line3 += numbers.zero.line3
        break;
      case '1':
        printSevenSegment.line1 += numbers.one.line1
        printSevenSegment.line2 += numbers.one.line2
        printSevenSegment.line3 += numbers.one.line3
        break;
      case '2':
        printSevenSegment.line1 += numbers.two.line1
        printSevenSegment.line2 += numbers.two.line2
        printSevenSegment.line3 += numbers.two.line3
        break;
      case '3':
        printSevenSegment.line1 += numbers.three.line1
        printSevenSegment.line2 += numbers.three.line2
        printSevenSegment.line3 += numbers.three.line3
        break;
      case '4':
        printSevenSegment.line1 += numbers.four.line1
        printSevenSegment.line2 += numbers.four.line2
        printSevenSegment.line3 += numbers.four.line3
        break;
      case '5':
        printSevenSegment.line1 += numbers.five.line1
        printSevenSegment.line2 += numbers.five.line2
        printSevenSegment.line3 += numbers.five.line3
        break;
      case '6':
        printSevenSegment.line1 += numbers.six.line1
        printSevenSegment.line2 += numbers.six.line2
        printSevenSegment.line3 += numbers.six.line3
        break;
      case '7':
        printSevenSegment.line1 += numbers.seven.line1
        printSevenSegment.line2 += numbers.seven.line2
        printSevenSegment.line3 += numbers.seven.line3
        break;
      case '8':
        printSevenSegment.line1 += numbers.eight.line1
        printSevenSegment.line2 += numbers.eight.line2
        printSevenSegment.line3 += numbers.eight.line3
        break;
      case '9':
        printSevenSegment.line1 += numbers.nine.line1
        printSevenSegment.line2 += numbers.nine.line2
        printSevenSegment.line3 += numbers.nine.line3
        break;
      default:
        //do nothing
    }

    printSevenSegment.line1 += '  '
    printSevenSegment.line2 += '  '
    printSevenSegment.line3 += '  '
  }

  for (var key in printSevenSegment) {
    printOutput += printSevenSegment[key] + '\n'
  }
  return printOutput
}

console.log(sevenSegment(1));
console.log(sevenSegment(87));
console.log(sevenSegment(1234567890));
