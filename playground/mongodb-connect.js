const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect('Mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error connecting database!');
  }
  console.log('Connecting database success!');

  insertDocuments(db, () => {
    db.close();

  });

});

const insertDocuments = (db, callback) => {
  let collection = db.collection('Todos');

  collection.insertMany([
    {
      a: 1
    }, {
      a: 2
    }, {
      a: 3
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });

};
