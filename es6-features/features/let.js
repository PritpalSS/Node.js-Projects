//let name = 'Gugz';
//console.log(name);

/*var x = 0;

if (true) {
	let x = 12;  // let variable x is visible only inside the curly braces (inside the block)
	console.log(x);
}

console.log(x);*/


//let name = 'Gugz';

for (let i=0; i<3; i++){  // using the let keyword, you clean up the scope (only making variables available to code that actually needs them)
	//console.log('for loops: i = '+i);
	console.log(`For loop: i = ${i}`);
}


function genCallback (){
	let name = 'Jagga';
	return function (){
		//console.log('Hello '+name);
		console.log(`Hello ${name}`);
	}
}

genCallback()();
