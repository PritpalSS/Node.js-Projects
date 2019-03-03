const PORT = 3000;

//console.log(PORT);
//PORT = 1212;
//console.log(PORT + 1);

const CONFIG = {  
	PORT: 3000  // you can always update the propery of an object, if the object is of const type
};

console.log(CONFIG);
CONFIG.PORT = 3001;
console.log(CONFIG);