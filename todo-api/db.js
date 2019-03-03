// *** Create New SQLite Database *** //
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite', //which database to use
	'storage': __dirname + '/data/dev-todo-api.sqlite'
});
var db = {};

// load in todo model
db.todo = sequelize.import(__dirname + '/models/todo.js');  // load in sequelize models from seperate files 
db.user = sequelize.import(__dirname + '/models/user.js');
db.token = sequelize.import(__dirname + '/models/token.js');
db.sequelize = sequelize; //sequelize instance
db.Sequelize = Sequelize; //Sequelize library 

db.todo.belongsTo(db.user);
db.user.hasMany(db.todo);

module.exports = db;