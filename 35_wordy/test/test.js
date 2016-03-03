var wordy = require('../solutions/yourfile.js');
var assert = require('assert');

describe('Word Problem', function() {

  it('add 1', function() {
    var question = 'What is 1 plus 1?';
    assert(2 == wordy(question));
  });

  xit('add 2', function() {
    var question = 'What is 53 plus 2?';
    assert(55 == wordy(question));
  });

  xit('add negative numbers', function() {
    var question = 'What is -1 plus -10?';
    assert(-11 == wordy(question));
  });

  xit('add more digits', function() {
    var question = 'What is 123 plus 45678?';
    assert(45801 == wordy(question));
  });

  xit('subtract', function() {
    var question = 'What is 4 minus -12?';
    assert(16 == wordy(question));
  });

  xit('multiply', function() {
    var question = 'What is -3 multiplied by 25?';
    assert(-75 == wordy(question));
  });

  xit('divide', function() {
    var question = 'What is 33 divided by -3?';
    assert(-11 == wordy(question));
  });

  xit('add twice', function() {
    var question = 'What is 1 plus 1 plus 1?';
    assert(3 == wordy(question));
  });

  xit('add then subtract', function() {
    var question = 'What is 1 plus 5 minus -2?';
    assert(8 == wordy(question));
  });

  xit('subtract twice', function() {
    var question = 'What is 20 minus 4 minus 13?';
    assert(3 == wordy(question));
  });

  xit('subtract then add', function() {
    var question = 'What is 17 minus 6 plus 3?';
    assert(14 == wordy(question));
  });

  xit('multiply twice', function() {
    var question = 'What is 2 multiplied by -2 multiplied by 3?';
    assert(-12 == wordy(question));
  });

  xit('add then multiply', function() {
    var question = 'What is -3 plus 7 multiplied by -2?';
    assert(-8 == wordy(question));
  });

  xit('divide twice', function() {
    var question = 'What is -12 divided by 2 divided by -3?';
    assert(2 == wordy(question));
  });

  xit('returns 42 when question is irrelevant', function() {
    var question = 'Who is the president of the United States?';
    assert(42 == wordy(question));
  });

});
