var RPNCalculator = function() {
	// this = {}
	this.stack = []
	//return this
}

RPNCalculator.prototype.value = function() {
		return this.stack[this.stack.length - 1]
	}
RPNCalculator.prototype.push = function(num) {
		this.stack.push(num)
	}
RPNCalculator.prototype.plus = function() {
		if(this.stack[0] === undefined) {
			throw "rpnCalculator is empty";
		}
		else {
			this.stack.push(this.stack.pop() + this.stack.pop())
		}
	};
RPNCalculator.prototype.minus = function() {
		if(this.stack[0] === undefined) {
			throw "rpnCalculator is empty"
		}
		else {
			var last = this.stack.pop()
			var secondLast = this.stack.pop()
			this.stack.push(secondLast - last)
		}
	}
RPNCalculator.prototype.divide = function() {
		if(this.stack[0] === undefined) {
			throw "rpnCalculator is empty"
		}
		else {
			var last = this.stack.pop()
			var secondLast = this.stack.pop()
			this.stack.push(secondLast / last)
		}
	}
RPNCalculator.prototype.times = function() {
		if(this.stack[0] === undefined) {
			throw "rpnCalculator is empty"
		}
		else {
			this.stack.push(this.stack.pop() * this.stack.pop())
		}
	}


//this.__proto__ = RPNCalculator.prototype

//instance.__proto__ = constructor.prototype

































