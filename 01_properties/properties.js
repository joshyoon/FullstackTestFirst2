
function setPropertiesOnObjLiteral(object){
	object.x = 7;
	object.y = 8;
	object.onePlus = function(object) {
		return object + 1;
	};
}

function setPropertiesOnArrayObj(arrayObject) {
	arrayObject.hello = function() {
		return "Hello!";
	}
	arrayObject.full = "stack";
	arrayObject[0] = 5;
	arrayObject.twoTimes = function(object) {
		return object * 2;
	};
}

function setPropertiesOnFunctionObj(functionObject) {
	// functionObject.functionObject = function() {
	// 	return "I am a function object, all functions are objects! Function can have their own properties too!";
	// }
	functionObject.year = 2015
	functionObject.divideByTwo = function(number) {
		return number / 2;
	}
	functionObject.prototype.helloWorld = function() {
		return "Hello World";
	}
}