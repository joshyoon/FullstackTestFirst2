var doubler = function(num) {
	return num * 2;
};

var map = function(array, iteratorFunc) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		newArray.push(iteratorFunc(array[i]));
	}
	return newArray;
};

var filter = function(array, iteratorFunc) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if(iteratorFunc(array[i]) === true) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};

var contains = function(collection, num) {
	var containedInArray = false
	for(var i in collection) {
		if(num === collection[i]) {
			return containedInArray = true
		}
	}
	return containedInArray;
}

//Unclear why this doesn't work:

// var contains = function(collection, num) {
// 	var containedInArray = false
// 	var collectionAsArray = Array.prototype.slice.call(arguments) 
// 	for(var i = 0; i < collectionAsArray.length; i++) {
// 		if(num === collectionAsArray[i]) {
// 			containedInArray = true
// 			break;
// 		}
// 	}
// 	return containedInArray;
// }

var countWords = function(string) {
	var words = 1
	for(var i = 0; i < string.length; i++) {
		if(string[i] === " ") {
			words += 1
		}
	}
	return words
}

var count = 2

// var countWordsInReduce = function(stringCharacter) {
// 	if(stringCharacter === " ") {
// 		count += 1
// 	}
// 	return count;
// }

// var reduce = function(collection, startVal, iteratorFunc) {
// 	var currentVal = startVal
// 	for(var i = 0; i < collection.length; i++) {
// 		if(typeof collection[i] !== "string") {
// 			currentVal = iteratorFunc(currentVal, collection[i])
// 		}
// 		else {
// 			for(var j = 0; j < collection[i].length; j++) {
// 				currentVal = iteratorFunc(collection[i][j])
// 			}
// 		}
// 	}
// 	return currentVal
// }


var countWordsInReduce = function(currentVal, string) {
	for(var i = 0; i < string.length; i++)
	if(string[i] === " ") {
		currentVal += 1
	}
	return currentVal;
}

var reduce = function(collection, startVal, iteratorFunc) {
	var currentVal = startVal
	for(var i = 0; i < collection.length; i++) {
		if(typeof collection[i] !== "string") {
			currentVal = iteratorFunc(currentVal, collection[i])
		}
	}
	return currentVal
}



var sum = function(array) {
	return reduce(array, 0, function(a, b) {
      return a + b;
    })
}

var every = function(array, iteratorFunc) {
	var even = true
	for(var i = 0; i < array.length; i++) {
		if(iteratorFunc(array[i]) === false)
			return even = false
	}
	return even;
}

var any = function(array, iteratorFunc) {
	var even = false
	for(var i = 0; i < array.length; i++) {
		if(iteratorFunc(array[i]) === true) {
			return even = true
		}
	}
	return even
}



