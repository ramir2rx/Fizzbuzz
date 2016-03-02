var fb = require("../fizzbuzz");

describe("a fizzbuzz program", function() {	
	// it("can count 1 to 5", function() {
	// 	expect(fb.count(1, 5)).toBe("1 2 3 4 5");
	// });
	it("can say fizz", function() {
		expect(fb.fizzbuzz(3)).toBe("fizz");
	});
	it("can say buzz", function() {
		expect(fb.fizzbuzz(5)).toBe("buzz");
	});
	it("can say fizzbuzz", function() {
		expect(fb.fizzbuzz(15)).toBe("fizzbuzz");
	});
	it("can return the number", function() {
		expect(fb.fizzbuzz(1)).toBe(1);
	});
	it("can do fizzbuzz from 1-5", function() {
		expect(fb.count(1, 5)).toBe("1 2 fizz 4 buzz");
	});
	it("can do fizzbuzz from 1-20", function() {
		expect(fb.count(1, 20)).toBe("1 2 fizz 4 buzz fizz "+
			"7 8 fizz buzz 11 fizz "+
			"13 14 fizzbuzz 16 17 fizz 19 buzz");
	});
});