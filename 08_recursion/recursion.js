var factorialIterative = function(num) {
	var result = 1
	while(num > 1) {
		result *= num * (num - 1);
		num -= 2;
	}
	return result;
}

var factorial = function(num) {
	if(num >= 1) {
		return num * factorial(num - 1);
	}
	else {
		return 1;
	}
};

// Start by thinking about our base cases:
// if we hit 0 we return 1
// if we hit 1 we return 1

var fib = function(num){
	if(num < 2) {
		return 1;
	}
	return fib(num - 1) + fib(num - 2)
}

//Sends us down a rabbit hole that we can't really get out of:

// var fib = function(num) {
// 	if(num > 1) {
// 		fib(num - 1);
// 		sequence.push((sequence[num - 2] + sequence[num - 1]));
// 		return sequence;
// 	}
// 	else {
// 		var sequence = [1, 1];
// 		return sequence.pop();
// 	}
// 	return sequence.pop();
// };


//Wont work beyond num = 2:

// var fib = function(num) {
// 	var sequence = [1, 1];
// 	if(num < 2) {
// 		return sequence[num];
// 	}
// 	else {
// 		sequence.push((sequence[num - 2] + sequence[num - 1]));
// 		return sequence.pop();
// 	}
// };


var type = function(value) {
	var toString = Object.prototype.toString;
	var stringWithType = toString.call(value);
	return stringWithType.substring(8, stringWithType.length - 1);
};

//^^used substring because it didn't seem like stringWithType had a pop() method. While it looked like an array, if you examined its length, you say that it was counting the brackets as well. So it was almost like a string. I'm pretty sure it was a string.


//Scott's type function:
// var type = function(value) {
// 	return Object.prototype.toString.call(value).slice(8, -1);
// };







// var stringify = function(value) {
// 	if(type(value) !== "Object" || "Array") {
// 		if(type(value) !== "Null" || "Undefined") {
// 			return value.toString();
// 		}
// 		else {
// 			return String(value);
// 		}
// 	}
// 	// else if (type(value) === "Array") {
// 	// 	for(var i = 0; i < value.length; i++) {
// 	// 		stringify(value[i])
// 	// 	}
// 	// } 
// }





// Scott suggests this set up is better, but it still doesn't work:

//Not sure why this isn't working:

// var stringify = function(value) {
// 	if(type(value) !== "Object" || "Array") {
// 		if(type(value) !== "String") {
// 			return String(value);
// 		}
// 		else {
// 			return '"' + value + '"'
// 		}
// 	}
// 	else if(type(value) === "Array") {
// 		return "[" +
// 			value.map(function(i) {
// 				return stringify(i);
// 			}).join(",") + "]"
// 	} 
// }


var stringify = function(value) {
	if(type(value) === "Undefined") {
		return value + ""
	}
	if(type(value) === "Null") {
		return value + ""
	}
	if(type(value) === "Boolean") {
		return value + ""
	}
	if(type(value) === "Number") {
		return value + ""
	}
	if(type(value) === "String") {
		return '"' + value + '"'
	}
	if(type(value) === "Function") {
		return value + ""
	}
	if(type(value) === "Array") {
		return "[" +
			value.map(function(i) {
				return stringify(i);
			}).join(",") + "]"
	}
	if(type(value) === "Object") {
		var result = []
		Object.keys(value).forEach(function(key) {
			var val = stringify(value[key]);
			if(val !== null) {
				result.push('"' + key + '": ' + value[key])
			}
		})
		return "{" + result.join(",") + "}";
	}
}





































