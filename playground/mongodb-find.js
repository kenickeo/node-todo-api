// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

const db = client.db('TodoApp');

// db.collection('Todos').find({_id: new ObjectID('5af16447938e7058d41b0dad')}).toArray().then((docs) => {

// console.log(JSON.stringify(docs, undefined, 2));

// }, (err) => {

// console.log('Unable to fetch todos', err);


// db.collection('Todos').find().count().then((count) => {

// console.log('Todos count: ' + count);

// }, (err) => {

// console.log('Unable to fetch todos', err);

db.collection('User').find({name: 'Kenickeo'}).toArray().then((docs) => {

console.log(JSON.stringify(docs, undefined, 2));

}, (err) => {

console.log('Unable to fetch todos', err);

});
// client.close();
});