var age = 25;

function printHello (){
	console.log("Hello");
}

var person = {
	name: 'Gugz',
	age,
	printHello,
	['hello' + (age+2)]: 'I am here',
	printAge () {
		console.log(this.age);
	}
};

//console.log(person.hello27);
person.printAge()