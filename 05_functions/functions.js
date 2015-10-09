var concat_string = function() {
	return Array.prototype.slice.call(arguments).join("");
};

// ^^Array.prototype.slice.call(arguments) returns an array of
// the arguments passed into concat_string,
// and adding join("") at the end turns that array into a string.


// Original (failing answer):

// var yourFunctionRunner = function() {
// 	var x = function() {
// 		var finalString = ""
// 		for(var i = 0; i < yourFunctionRunner.arguments.length; i++) {
// 			finalString += arguments[i]();
// 		}
// 		return finalString;
// 	};
// 	return x();
// };

// Revised original answer that works:

// var yourFunctionRunner = function() {
// 		var finalString = ""
// 		for(var i = 0; i < yourFunctionRunner.arguments.length; i++) {
// 			finalString += arguments[i]();
// 		}
// 		return finalString;
// 	};
	
// Second (working) answer:

var yourFunctionRunner = function() {
	var output = "";
	var argArray = Array.prototype.slice.call(arguments);
	for(var i = 0; i < argArray.length; i++) {
		output += argArray[i]();
	}
	return output;
};


var makeAdder = function(A) {
	var adder = function(num) {
		return num += A;
	};
	return adder;
};


// Looking below, increment = newFunc, so increment() = newFunc()

// Closures occuring in a few places. In the spec, the function
// inside once is closing over num. In my solution below, newFunc
// is closing over both x and func. And in David's solution, his 
// inner function is closing over both hasRan and fnToRunOnceOnly

// Refer to the bottom for a good explanation of closure.

var x = 0

var once = function(func) {
	var newFunc = function() {
		if(x === 0) {
			x = 1
			return func();
		}
	};
	return newFunc;
};

// ^^ David's alternate solution:

// var once = function(fnToRunOnceOnly) {
// 	 var hasRan = false;
// 	 return function() {
// 		 if(hasRan === false) {
// 			 fnToRunOnceOnly();
// 			 hasRan = true;
// 		 }
// 	 };
// };

// ^^ Closure in the above example: When once is run (and the function
// is returned) hasRan should disappear. Yet the function maintains access
// to it because it closed over it.


var createObjectWithTwoClosures = function() {
	var x = 0;
	var obj = {
		oneIncrementer: function() {
			x++;
		},
		tensIncrementer: function() {
			x += 10;
		},
		getValue: function() {
			return x;
		}
	}
	return obj;
}

// Regarding how closure is working in this last spec...
// we have a Master function (createObjectWithTwoClosures)
// that creates a variable (x) and it creates an object that
// contains 3 functions which it returns. Once the master 
// function is run (and the object is returned) that variable
// (x) is no longer on the call stack. It should disappear.
// Yet, the 3 functions inside of the object can still use it because
// they both closed over it. Not only can they both use it,
// they can dynamically modify it, such that if one increases x's value
// the other now understands x to equal the new value.











