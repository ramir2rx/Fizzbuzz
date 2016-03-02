#!/usr/bin/env node

exports.count = function(start, end) {
	var output = start;
	for(var i = start; i < end; i++)
	{
		output += " " + exports.fizzbuzz(i+1);
	}
	return output;
}
exports.fizzbuzz = function(num) {
	if(num % 3 == 0 && num % 5 == 0)
		return "fizzbuzz";
	else if(num % 3 == 0)
		return "fizz";
	else if(num % 5 == 0)
		return "buzz";
	else
		return num;
}

