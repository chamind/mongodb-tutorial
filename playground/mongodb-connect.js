const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('Mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error connecting database!');
  }
  console.log('Connecting database success!');

  const collection1 = db.collection('Todos');
  const collection2 = db.collection('Users');

  // collection1.insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // collection2.insertOne({
  //
  //   userName: 'Cham',
  //   age: 28,
  //   Height: '179cm',
  //   weight: '70KG'
  //
  // }, (err, result) => {
  //
  //   if (err) {
  //    return  console.log('Error insert Document');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  db.close();
});
