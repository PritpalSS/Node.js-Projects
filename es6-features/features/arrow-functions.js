var people = ['Andy', 'Vicky', 'Jagu', 'Yuvi'];

/*people.forEach(function (name){
	console.log(name);
});*/

//people.forEach((name) => console.log(name));  //arrow function, using single statement

/*people.forEach((name) => {  //arrow function, using multiple statements
	console.log('Welcome');
	console.log(name);
});*/


// Original function definition
/*function add (a, b){
	return a + b;
}*/

//var add = (a,b) => a + b;
var add = (a,b) => {return a + b};
console.log(add(3, 9));


var person = {
	name: 'Gugz',
	likes: ['Movies', 'Programming', 'Jogging'],
	generateGreeter: function (){
		return () => {
			console.log(this.name);
		}
	},
	printLikes: function (){
		this.likes.forEach((like) => {
			console.log(`${this.name} likes ${like}`);
		});
	}
};

person.printLikes();