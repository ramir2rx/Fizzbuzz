// #!/usr/bin/env node
var count, fizzbuzz; 
count = function(start, end) {
	var output = fizzbuzz(start);
	for(var i = start; i < end; i++) {
		output += " " + fizzbuzz(i+1);
	}
	return output;
}
fizzbuzz = function(num) {
	if(0 == num % 15)
		return "fizzbuzz";
	else if(0 == num % 3)
		return "fizz";
	else if(0 == num % 5)
		return "buzz";
	else
		return num;
}

 module.exports = {
 	count: count,
 	fizzbuzz: fizzbuzz
 }
