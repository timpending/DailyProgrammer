module.exports = function(question) {
  question = question.replace("?", "")
  var calculation = question.split(' ').reduce(function(list, word) {
    word = testWord(word)
    if (word) {
      list.push(word)
    }
    return list
  }, [])

  if (calculation.length > 0) {
    var answer = calculation[0]
    for (var i = 1; i < calculation.length; i++) {
      if (isNaN(calculation[i])) {
        answer = calcs[calculation[i]](answer, calculation[ i + 1])
      }
    }
    return answer
  } else {
    return 42
  }
}

function testWord(word) {
  var result = undefined
  if (word === 'plus') {
    result = '+'
  } else if (word === 'minus') {
    result = '-'
  } else if (word === 'multiplied' || word === 'times') {
    result = '*'
  } else if (word === 'divided' || word === '') {
    result = '/'
  } else if (!isNaN(word)) {
    result = parseInt(word)
  }
  return result;
}

var calcs = {
  '+': function(a, b) {
    return a + b
  },
  '-': function(a, b) {
    return a - b
  },
  '*': function(a, b) {
    return a * b
  },
  '/': function(a, b) {
    return a / b
  }
}
