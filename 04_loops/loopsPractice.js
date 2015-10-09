// var repeat = function(yo, num) {
// 	var finalString = ""
// 	for(var i = 0; i < num; i++) {
// 		finalString += "yo"
// 	}
// 	return finalString;
// };

// var sum = function(array) {
// 	addedUp = 0;
// 	for(var i = 0; i < array.length; i++) {
// 		addedUp += array[i];
// 	}
// 	return addedUp;
// }

// var gridGenerator = function(num) {
// 	var grid = ""
// 	for(var i = 0; i < num; i++) {
// 		for(var j = 0; j < num; j++) {
// 			if((i + j) % 2 === 0) {
// 				grid += "#"
// 			}
// 			else {
// 				grid += " "
// 			}
// 		}
// 		grid += "\n"
// 	}
// 	return grid;
// }

// var largestTriplet = function(c) {
// 	for(var b = c - 1; b > 0; b--) {
// 		for(var a = b; a > 0; a--) {
// 			if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
// 				return [a,b,c];
// 			}
// 		}
// 	}
// 	return largestTriplet(c -= 1)
// }

// var join = function(array, delimiter) {
// 	finalString = "";
// 	for(var i = 0; i < array.length; i++) {
// 		if(delimiter === undefined || i === array.length - 1) {
// 			finalString += array[i];
// 		}
// 		else {
// 			finalString += array[i] + delimiter;
// 		}
// 	}
// 	return finalString;
// }

// var paramify = function(obj) {
// 	var finalArray = []
// 	for(var key in obj) {
// 		if(obj.hasOwnProperty(key)) {
// 			finalArray.push(key + "=" + obj[key])
// 		}
// 	}
// 	finalArray.sort()
// 	return finalArray.join("&")
// }


















