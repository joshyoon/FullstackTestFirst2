function Mammal(name) {
	// this = {}
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function() {
	return "My name is " + this.name + ", I'm a Mammal"
};

// Mammal.prototype.haveBaby = function() {
// 	var baby = {};
// 	baby.name = "Baby " + this.name;
// 	this.offspring.push(baby);
// 	return baby;
// }

//Better to use this because it makes baby an instance of mammal, so it has a name and offspring property, plus a sayHello method. Otherwise, baby has no linkage to mammal. 
Mammal.prototype.haveBaby = function() {
	var baby = new Mammal("Baby " + this.name)
	this.offspring.push(baby);
	return baby;
}


function Cat(name, color) {
	// this = {}
	Mammal.call(this, name); //calls Mammal with a reference to cat rather than myMammal. And passes in a parameter. Which in our case should be Garfield.
	// this = {name: "Garfield", offspring: []}
	this.color = color
}

//Now we need to use Object.create to add methods to Cat.prototype (the spec shows that)

//we need a link from Cat.prototype to Mammal.prototype

//Why can't we just write Cat.prototype = Mammal.protoype?
//Because this would make them reference the same object. So we couldn't give Cat's a specific method that mammal's don't have.

//Why can't we just write Cat.prototype = new Mammal().
//Because here, Cat.prototype would be an instance of Mammal. And this would give Cat.Prototype instance properties (name, offspring), that it doesnt need and we don't want it to have. So Object.create is preferable.

//Only functions have a prototype property.
//But every object has a __proto__

Cat.prototype = Object.create(Mammal.prototype) // this creates a brand new object, Cat.prototype and links its __proto__ to Mammal.prototype so that it can inherit methods from Mammal.prototype, which is what we wanted. This means the original Cat.prototype was written over. 