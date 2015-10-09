//Since they've used the Mammal constuctor function to create
//an instance of a mammal (myMammal), this istance's __proto__
//points to the Mammal constructor's prototype.
//That is, myMammal.__proto__ = Mammal.prototype

//This is a general pattern:
// instance.__proto__ = constructor.prototype

//Getting started, note that they've defined the instance, 
//but not the constructor, so that's where we begin...

//since var myMammal = new Mammal("Joe")
//myMammal equals the output of Mammal which (since we're using new)
//is this.

//That is why adding properties to this below works.

//If we add properties to this, we effectively add properties
//to myMammal.

var Mammal = function(name) {
	this.name = name;
	this.offspring = [];
};

// new Mammal

// {name: name, offspring: []} ===> .__proto__ {sayHello: function, haveBaby:}

// Note that we tend put methods in the constructor's prototype:

//they say myMammal "should have a sayHello function on its prototype"

//since its prototype is Mammal.prototype, we add sayHello to Mammal.prototype

Mammal.prototype.sayHello = function() {
	return "My name is " + this.name + ", I'm a Mammal";
};

// note how myMammal.hasOwnProperty("sayHello") = false in the spec

// this is because sayHello is not on the instance, myMammal, itself. 
// sayHello is accessible through the intenace's prototype(myMammal.__proto__),
// which references Mammal.prototype (which contains sayHello)



// Mammal.prototype.haveBaby = function() {
// 	var child = {};
// 	child.name = "Baby Joe";
// 	this.offspring.push(child);
// 	return child;
// };

Mammal.prototype.haveBaby = function() {
	var child = new Mammal("Baby " + this.name);
	this.offspring.push(child);
	return child;
};


var Cat = function(name, color) {
	Mammal.call(this, name); // This simply calls Mammal. No inheritance has taken place yet.//makes this(which in Cat is cat) into the this of Mammal. And we have to pass in a parameter for Mammal. Since it only takes a name, we pass the appropriate name, "Garfield". This gives the Cat constructor a name and offspring property. Using call in this case is exactly like having written "this.name = name" and "this.offspring = []". We use call just to keep shit DRY. Dont Repeat Yourself
	this.color = color;
};

Cat.prototype = Object.create(Mammal.prototype); //here we write over the original Cat.prototype, and make it an empty object with a __proto__ pointing to Mammal.prototype. This enables a cat instance to use the sayHello and haveBaby methods. Because remember, cat.__proto__ links to Cat.prototype. So now Cat.prototype has access to sayHello and haveBaby.


Cat.prototype.constructor = Cat; //in the step above, when we wrote over the original Cat.prototype, we lost the constructor property. So here we need to define it. 


//After Object.create(Mammal.prototype), the constructor property was pointing to Mammal, but we need it to point to Cat.

Cat.prototype.haveBaby = function(color) {
	var baby = new Cat(("Baby " + this.name), color);
	this.offspring.push(baby);
	return baby;
};




