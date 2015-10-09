// // Doubler is specifically named in the spec (and not defined there)
// // so we have to define it. 

// var doubler = function(element) {
// 	return element * 2;
// };

// var map = function(array, iteratorFunc) {
// 	var newArray = [];
// 	for(var i = 0; i < array.length; i++) {
// 		newArray.push(iteratorFunc(array[i]));
// 	}
// 	return newArray;
// };

// //We just used functional programming! 
// // For any array and function that describes
// // what we want to do with each element of the array
// // (that is, the iterator function) we can just pass 
// // those into map. And boom. We've performed the function 
// // we want on the array we want. And we have a new array 
// // with our desired output.

// var filter = function(collection, iteratingFunc) {
// 	newCollection = [];
// 	for(var i = 0; i < collection.length; i++){ 
// 		if(iteratingFunc(collection[i]) === true) {
// 			newCollection.push(collection[i]);
// 		}
// 	}
// 	return newCollection;
// };

// var contains = function(collection, matchingValue) {
// 	var doesItMatch = false;
// 	var collectionAsArray = []
// 	for(var key in collection) {
// 		collectionAsArray.push(collection[key]);
// 	}
// 	for(var i = 0; i < collectionAsArray.length; i++) {
// 		if(collectionAsArray[i] === matchingValue) {
// 			doesItMatch = true;
// 			break
// 		}
// 	}
// 	return doesItMatch;
// };

// var countWords = function(sentence) {
// 	var numWords = 0
// 	for(var i = 0; i < sentence.length; i++) {
// 		if(sentence[i] === " ") {
// 			numWords++;
// 		}
// 	}
// 	return numWords + 1; // + 1 to account for last word
// };

// //Below is an independently functioning countWordsInReduce function. 
// // Problem with this is that it's not adjusted for how 
// // iteratorFunction actually works inside reduce...

// // var countWordsInReduce = function(arrayOfStrings) {
// // 	var count = 0
// // 	for(var i = 0; i < arrayOfStrings.length; i++) {
// // 		for(var j = 0; j < arrayOfStrings[i].length; j++) {
// // 			if(arrayOfStrings[i][j] === " ") {
// // 				count++;
// // 			}
// // 		}
// // 		count += 1
// // 	}
// // 	return count;
// // };


// //Adjusted countWordsInReduce function:

// var count = 0

// var countWordsInReduce = function(stringCharacter) {
// 	if(stringCharacter === " ") {
// 		count++
// 	}
// 	return count;
// };

// var reduce = function(collection, startValue, iteratorFunc) {
// 	var currentValue = startValue
// 	for(var i = 0; i < collection.length; i++) {
// 		if(typeof collection[i] !== "string") {
// 			currentValue = iteratorFunc(currentValue, collection[i]);
// 		}
// 		else {
// 			for(var j = 0; j < collection[i].length; j++) {
// 				currentValue = iteratorFunc(collection[i][j])
// 			}
// 			currentValue += 2;
// 			// we add 1 to currentValue for each element in collection
// 			// because for each element, we're counting spaces,
// 			// so we're always 1 off from the total number of words.
// 		}
// 	}
// 	return currentValue;
// };

// var sum = function(array) {
// 	return reduce(array, 0, function add(a, b) {
//       return a + b;
//     })
// };

// var every = function (set, iteratorFunc) {
// 	var x = ""
// 	if(typeof set[0] === "undefined") {
// 		return true;
// 	}
// 	else {
// 		for(var i = 0; i < set.length; i++) {
// 			x = iteratorFunc(set[i]);
// 			if(x === false) {
// 				break;
// 			}
// 		}
// 	}
// 	return x;
// };

// var any = function(set, iteratorFunc) {
// 	var y = ""
// 	if(typeof set[0] === "undefined") {
// 		return false;
// 	}
// 	else {
// 		for(var i = 0; i < set.length; i++) {
// 			y = iteratorFunc(set[i]);
// 			if (y === true) {
// 				break;
// 			}
// 		}
// 	}
// 	return y;
// }



