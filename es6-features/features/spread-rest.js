/*function add (a, b){
	return a + b;
}

var numbers = [4, 22];
console.log(add(1, 5));
console.log(add(...numbers));*/


/*var groupA = [33, 99];
var groupB = [11];
var unified = [0, ...groupA, ...groupB, 100];

unified.push(...[55, 33])

console.log(unified);*/


/*function greetUsers (group,...names){  //using rest-params 
	names.forEach(function (name){
		console.log('Hello '+ name);
		console.log(`Hello ${name}. You ae part of ${group}`);
	});
}

greetUsers('Developers', 'gugz', 'singh', 'jagga');*/


function adder (base, ...numbers){
	numbers.forEach(function (number){
		console.log(base + number);
	});
}

adder(3, 5, 7, 1);