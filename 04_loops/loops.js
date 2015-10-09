var repeat = function(yo, num) {
	var finalString = "";
	for(var i = 0; i < num; i++) {
		finalString += yo;
	}
	return finalString;
}

var sum = function(yourArray) {
	var x = 0
	for(var i = 0; i < yourArray.length; i++) {
		x += yourArray[i];
	}
	return x
}

var gridGenerator = function(num) {
	var finalString = ""
	for(var i = 0; i < num; i++) {
	// i = columns --> top/bottom
		for(var j = 0; j < num; j++) {
		// j = rows --> left to right, adding characters
			if((i + j) % 2 === 0) {
				finalString += "#";
			}
			else {
				finalString += " ";
			}
		};
		finalString += "\n";
	};
	return finalString;
};

var largestTriplet = function(c) {
	for(var b = 100; b > 0; b--) {
		for(var a = 100; a > 0; a--) {
			if((Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2)) {
				return [a, b, c];
			}
		}
	}
	return largestTriplet(c -= 1)
}

var join = function(array, delimiter) {
	var string = ""
	for(var i = 0; i < array.length; i++) {
		if(typeof delimiter === "undefined") {
			string += array[i];
		}
		else if(i === array.length - 1) {
			string += array[i]
		}
		else {
			string += array[i] + delimiter;
		}
	};
	return string;
};

var paramify = function(object) {
	var newArray = [] 
	for(var key in object) {
		if(object.hasOwnProperty(key)) {
			if (typeof key !== "undefined") {
				newArray.push(key + "=" + object[key])
			}
			newArray.sort()
		}
	}
	return newArray.join("&");
}



//Just to be clear on what's going on in the final test:
//They create Alphabet() which is a constructor function (since it's made with 'new')
//meaning that when we first see 
//  var Alphabet = function() {
//      this.a = 1;
//      this.b = 2;
//  };
//
// It really looks like this:
//
//  var Alphabet = function() {
//      this = {};
//
//		this.a = 1;
//      this.b = 2;
//
//      this.__proto__ = Alphabet.prototype;
//
//      return this;
//  };
//
//Since later on we see that they add a "c" property to Alphabet.prototype
//that property is accessible from alphabet
//such that if we were to run a for in loop on alphabet
//without using hasOwnProperty(), we woud output
//a=1&b=2&c=3
//
//even though we only want to output a=1&b=2







