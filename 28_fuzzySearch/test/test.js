var expect = require('chai').expect
var fuzzySearch = require('../solutions/me')

var names = ["mike","fred", "rob", "dave", "jack", "marry", "mark", "jim", "jill", "june", "jess", "grey", "greg", "mark", "jenn", "richard", "robert"]

describe("fuzzy-search", function() {
	describe("search", function() {
		it("should return a list of words that match the search", function() {
			var result = fuzzySearch('jill', names);
			expect(result).to.equal(['jill']);
		});
		it("should return an empty list if search isn't found", function() {
			var result = fuzzySearch('bob', names);
			expect(result).to.equal([]);
		});
	});	
	describe("complete search", function() {
		xit("should return a list of words that match part of the search", function() {
			var result = fuzzySearch('rob', names);
			expect(result).to.equal(['rob', 'robert']);
		});
		xit("should return an empty list if search is blank", function() {
			var result = fuzzySearch('', names);
			expect(result).to.equal([]);	
		});
	});
	describe("remove duplicates", function() {
		xit("should remove duplicates from the result list", function() {
			var result = fuzzySearch('mark', names);
			expect(result).to.equal(['mark']);
		});
	});
	describe("fuzzy search", function() {
		xit("should return a list of words that match off one character", function() {
			var result1 = fuzzySearch('jit', names);
			var result2 = fuzzySearch('mart', names);
			var result3 = fuzzySearch('freg', names);
			var result4 = fuzzySearch('tret', names);
			var result5 = fuzzySearch('martt', names);

			expect(result1).to.equal(['jim', 'jill']);
			expect(result2).to.equal(['mark', 'marry']);
			expect(result3).to.equal(['fred', 'greg']);
			expect(result4).to.equal([]);
			expect(result5).to.equal([]);
		});	
	});
	describe('extra features', function() {
		xit("should be case insensitive", function() {
			var result = fuzzySearch('JaCK', names);
			expect(result).to.equal(['jack']);	
		});
		xit("should handle white space", function() {
			var result = fuzzySearch('        june    ', names);
			expect(result).to.equal(['june']);	
		}); 	
	});
	describe('stretch', function() {
		xit("should make fuzzy search an option" ,  function() {
			// example: fuzzySearch(search, listOfWords, fuzzySearch)
			var result1 = fuzzySearch('richar', names, false);
			var result2 = fuzzySearch('richar', names, true);
			expect(result1).to.equal([]);	
			expect(result2).to.equal(['richard']);	
		});
		xit("should make the fuzzy tolerance an option", function() {
			// example: fuzzySearch(search, listOfWords, fuzzySearch, tolerance)
			var result1 = fuzzySearch('roperp', names, true, 2);
			var result2 = fuzzySearch('matt', names, true, 3);

			expect(result1).to.equal(['robert']);
			expect(result2).to.equal(['mike', 'marry', 'mark']);
		});
	});
})
