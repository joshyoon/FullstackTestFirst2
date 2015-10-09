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

