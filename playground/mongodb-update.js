// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({

// 	_id: new ObjectID('5afbda4a69191e24e0132027')

// }, {

// 	$set: {

// 		completed: true
// 	}
// }, {

// 	returnOriginal: false
// }).then((result) => {

// 	console.log(result);

// });

db.collection('User').findOneAndUpdate({

	_id: new ObjectID('5b022ab836d4640198606d71')

}, {

	$set: {

		name: 'Kenickeo'
	},

	$inc: {

		age: 1
	}

}, {

	returnOriginal: false
	
}).then((result) => {

	console.log(result);
});
});