/*var myMap = new Map();

// Set
myMap.set('name', 'Andrew');

// Get
console.log(myMap.get('name'));

// Has
myMap.set('age', 25);
console.log(myMap.has('age'));

// Delete
myMap.delete('name');

// Clear
myMap.clear();

// Size
console.log(myMap.size);

var user = {name: 'Gugz'};
myMap.set(user, 'Liverpool');
console.log(myMap.get(user));*/


/*var myMap = new Map();

myMap.set(1, 'Yuvi');
myMap.set(2, 'Jadu');
myMap.set(3, 'Launda');

console.log([...myMap]);
console.log(myMap.keys());
console.log(myMap.values());*/


//Challenge Area
var location = {name: 'London'};
var secondLocation = {name: 'Delhi'};
var weather = new Map();

function setWeather (location, temp){
	weather.set(location, temp);
}

function printWeather (location){
	//if there is weather, print nice message
	if(weather.has(location)) {
		console.log(`It's ${weather.get(location)} in ${location.name}`);
	} 
	//if no weather, tell them no weather recorded
	else{
		console.log(`No weather recorded for ${location.name}`);
	}
	

}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);