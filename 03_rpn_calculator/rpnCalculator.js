//Note: since in the spec they wrote 
//var rpnCalculator = new RPNCalculator() 
// rpnCalculator is an instance of RPNCalculator, which is
// a constructor.

// Remember: rpnCalculator is equal to the output of
// new RPNCalculator(), which is this.



// Note that first we add all of the methods to RPNCalculator
// itself, then we move them to RPNCalculator.prototype in the
// second to last test.



// var RPNCalculator = function() {
// 	// since we're using the new keyword,
// 	// a few things have happened:
// 	// 1. this = {} (an empty object)
// 	// 2. this.__proto__ = RPNCalculator.prototype
// 	// 3. Our RPNCalculator returns this automatically
// 	// (ignoring 4 for now)

// 	this.stack = [];
// }

// RPNCalculator.prototype.push = function(num) {
// 		this.stack.push(num);
// 	}
// RPNCalculator.prototype.plus = function() {
// 		if (this.stack.length > 0) {
// 			this.last = this.stack.pop()
// 			this.secondToLast = this.stack.pop()
// 			this.stack.push(this.secondToLast + this.last)
// 		}
// 		else {
// 			throw "rpnCalculator is empty"
// 		}
// 	}
// RPNCalculator.prototype.minus = function() {
// 		if (this.stack.length > 0) {
// 			this.last = this.stack.pop()
// 			this.secondToLast = this.stack.pop()
// 			this.stack.push(this.secondToLast - this.last)
// 		}
// 		else {
// 			throw "rpnCalculator is empty"
// 		}
// 	}
// RPNCalculator.prototype.divide = function() {
// 		if (this.stack.length > 0) {
// 			this.last = this.stack.pop()
// 			this.secondToLast = this.stack.pop()
// 			this.stack.push(this.secondToLast / this.last)
// 		}
// 		else {
// 			throw "rpnCalculator is empty"
// 		}
// 	}
// RPNCalculator.prototype.times = function() {
// 		if (this.stack.length > 0) {
// 			this.last = this.stack.pop()
// 			this.secondToLast = this.stack.pop()
// 			this.stack.push(this.secondToLast * this.last)
// 		}
// 		else {
// 			throw "rpnCalculator is empty"
// 		}
// 	}
// RPNCalculator.prototype.value = function() {
// 		return this.stack[this.stack.length - 1]
// 	}
