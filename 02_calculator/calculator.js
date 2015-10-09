var createCalculator = function() {
	var x = {};
	var y = 0;
	x.value = function() {
		return y;
	};
	x.add = function(number) {
		y += number;
	};
	x.subtract = function(number) {
		y -= number;
	};
	return x;
};




// Their Solution (which uses "this"):

// var createCalculator = function() {
// 		var createdCalc = {};

// 		createdCalc.total = 0;

// 		createdCalc.value = function() {
// 			return this.total;
// 		};

// 		createdCalc.add = function(num) {
// 			this.total += num;
// 		};

// 		createdCalc.subtract = function(num) {
// 			this.total -= num;
// 		};

// 		return createdCalc;
// };

// var calculator = createCalculator();