/*var chatRooms = new Set();  //All sets have unique item in them

// Add
chatRooms.add('Runners');
chatRooms.add('Runners');
chatRooms.add('Bikers');

// Size
console.log(chatRooms.size);

// Has
console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// Delete
/*chatRooms.delete('Bikers');
chatRooms.clear(); //removes every single item in the set
console.log(chatRooms.size);

chatRooms.add({name: 'Gugz'});

// To array
console.log([...chatRooms]);

chatRooms.forEach(function (chatRoom){
	console.log(`Found chat room: ${chatRoom}`);
});*/


//Challenge Area

var movies = new Set();

function addMovie (movieTitle){

	if(movies.has(movieTitle)){
		//Error
		console.log(`Error! ${movieTitle} already exists!`);
	}
	else {
		//Success
		movies.add(movieTitle);
		console.log(`Success! ${movieTitle} was added!`);
	}

}

addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');