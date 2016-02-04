var Bob = require('../solutions/yourfile.js');
var assert = require('assert');

describe('Bob', function() {
  var bob = new Bob();

  it('stating something', function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    assert(result == 'Whatever.');
  });

  xit('shouting', function() {
    var result = bob.hey('WATCH OUT!');
    assert(result == 'Whoa, chill out!');
  });

  xit('asking a question', function() {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');
    assert(result == 'Sure.');
  });

  xit('talking forcefully', function() {
    var result = bob.hey('Let\'s go make out behind the gym!');
    assert(result == 'Whatever.');
  });

  xit('using acronyms in regular speech', function() {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    assert(result == 'Whatever.');
  });

  xit('forceful questions', function() {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    assert(result == 'Whoa, chill out!');
  });

  xit('shouting numbers', function() {
    var result = bob.hey('1, 2, 3 GO!');
    assert(result == 'Whoa, chill out!');
  });

  xit('only numbers', function() {
    var result = bob.hey('1, 2, 3');
    assert(result == 'Whatever.');
  });

  xit('question with only numbers', function() {
    var result = bob.hey('4?');
    assert(result == 'Sure.');
  });

  xit('shouting with special characters', function() {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    assert(result == 'Whoa, chill out!');
  });

  xit('shouting with umlauts', function() {
    // NOTE: "\xfcML\xe4\xdcTS" === "üMLäÜTS"
    var result = bob.hey('\xdcML\xc4\xdcTS!');
    assert(result == 'Whoa, chill out!');
  });

  xit('calmly speaking about umlauts', function() {
    var result = bob.hey('\xfcML\xe4\xdcTS');
    assert(result == 'Whatever.');
  });

  xit('shouting with no exclamation mark', function () {
    var result = bob.hey('I HATE YOU');
    assert(result == 'Whoa, chill out!');
  });

  xit('statement containing question mark', function() {
    var result = bob.hey('Ending with a ? means a question.');
    assert(result == 'Whatever.');
  });

  xit('prattling on', function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    assert(result == 'Sure.');
  });

  xit('silence', function () {
    var result = bob.hey('');
    assert(result == 'Fine. Be that way!');
  });

   xit('prolonged silence', function () {
    var result = bob.hey('   ');
    assert(result == 'Fine. Be that way!');
  });
});
