function greet (name = 'Andy'){
	console.log('Hello '+ name + '!');
	console.log(`Hello ${name}!`);  // using template-string
}

greet();
greet('Launda');

console.log(`1 + 6 = ${1 + 6}`);

console.log(`Hey,

This kindof looks like an email!

- Gugz
`);

var person = {
	name: 'Gugz',
	age: 23
}

var defaultPerson = {
	name: 'Anonymous',
	age: 0
}

function welcomeUser (person = defaultPerson) {
	console.log(`Hello ${person.name} You are ${person.age}`);
}

welcomeUser();
welcomeUser(person);