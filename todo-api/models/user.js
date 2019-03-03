var bcrypt = require('bcrypt');
var _ = require('underscore');
var cryptojs = require('crypto-js');
var jwt = require('jsonwebtoken');

module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		//define the attributes for the model
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		//Salt means adding random set of characters on the end of plain text password, before it is hashed. If two users have the same passwords but different salts, then the result will be different Hash values    
		salt: {
			type: DataTypes.STRING
		},
		password_hash: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.VIRTUAL, //VIRTUAL data type means, it doesn't get stored in the database but it is accessible
			allowNull: false,
			validate: {
				len: [7, 100]
			},
			set: function(value) {
				var salt = bcrypt.genSaltSync(10); // generate number of characters you want for your salt 
				var hashedPassword = bcrypt.hashSync(value, salt); //Arg 1 -> Actual value you want to Hash (Password in this case)  Arg 2 -> Salt which we stored in salt variable

				this.setDataValue('password', value); // Password will not be stored in database as it's Virtual data type
				this.setDataValue('salt', salt); // Salt vill the stored in the database
				this.setDataValue('password_hash', hashedPassword);
			}
		}
	}, {
		hooks: {
			beforeValidate: function(user, options) {
				// user.email
				if (typeof user.email === 'string') {
					user.email = user.email.toLowerCase();
				}
			}
		},
		classMethods: {
			authenticate: function(body) {
				return new Promise(function (resolve, reject) {
					if (typeof body.email !== 'string' || typeof body.password !== 'string') {
						return reject();
					}

					user.findOne({
						where: {
							email: body.email
						}
					}).then(function(user) {
						if (!user || !bcrypt.compareSync(body.password, user.get('password_hash'))) { // Authentication failed (If there is No User (Email not existing) OR )
							return reject();
						}

						resolve(user);
					}, function() {
						reject();
					});

				});
			},
			findByToken: function (token){
				return new Promise(function (resolve, reject){
					try{
						var decodedJWT = jwt.verify(token, 'qwerty098');
						var bytes = cryptojs.AES.decrypt(decodedJWT.token, 'abc123!@#!');
						var tokenData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));

						user.findById(tokenData.id).then(function (user){
							if(user){
								resolve(user);
							} else{
								reject();
							}
						}, function (e){
							reject();
						});
					} catch (e){
						reject();
					}
				});
			}
		},
		instanceMethods: {
			toPublicJSON: function() {
				var json = this.toJSON(); // this refers to the instance 
				return _.pick(json, 'id', 'email', 'createdAt', 'updatedAt');
			},
			generateToken: function (type){
				if(!_.isString(type)){
					return undefined;
				}

				try{
					var stringData = JSON.stringify({id: this.get('id'), type: type});  //This line takes our data, the user's Id and the type and it turns into a JSON string. The reason we need a string is because AES.encrypt only know's how to encrypt a string.
					var encryptedData = cryptojs.AES.encrypt(stringData, 'abc123!@#!').toString();  //Arg 1 -> String you want to encrypt.  Arg 2 -> Encryption Secret 
					var token = jwt.sign({
						token: encryptedData
					}, 'qwerty098');

					return token;
				} catch (e){
					return undefined;
				}
			}
		}
	});

	return user;
};