class Person {
	constructor (name) {
		this.name = typeof name === 'string' ? name : 'Anonymous';
	}

	set name (val){
		this._name = Person.capitalizeWord(val);
	}

	get name (){
		return this._name;
	}

	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}

	// Static methods don't require instance of Person class in order to work 
	static capitalizeWord (word) {
		return word[0].toUpperCase() + word.slice(1);
	}
}

var person1 = new Person('Gugz');
//person1.name = 'juggy';
person1.printGreeting();

var person2 = new Person();
person2.printGreeting();

console.log(Person.capitalizeWord('sandy'));