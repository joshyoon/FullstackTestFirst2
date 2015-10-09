// var concat_string = function() {
// 	return Array.prototype.slice.call(arguments).join("");
// }

// var yourFunctionRunner = function() {
// 	var argumentsAsArray = Array.prototype.slice.call(arguments)
// 	var finalString = ""
// 	for(var i = 0; i < argumentsAsArray.length; i++) {
// 		finalString += argumentsAsArray[i]()
// 	}
// 	return finalString;
// }

// var makeAdder = function(A) {
// 	var newFunc = function(num) {
// 		return num + A;
// 	};
// 	return newFunc;
// };

// var once = function(func) {
// 	var counter = 0
// 	var newFunc = function() {
// 		if(counter === 0) {
// 			counter++
// 			return func()
// 		}
// 	}
// 	return newFunc;
// }

// var createObjectWithTwoClosures = function() {
// 	var counter = 0
// 	var obj = {}
// 	obj.oneIncrementer = function() {
// 		return counter += 1;
// 	}
// 	obj.tensIncrementer = function() {
// 		return counter += 10;
// 	}
// 	obj.getValue = function() {
// 		return counter;
// 	}
// 	return obj;
// }