// create database
use farm;

// create collection animals
db.animals.insert({
  name: "Erick",
  type: "Polar Bear"
});

db.animals.insert({
  name: "Fred",
  type: "Lion"
});

db.animals.find({name: "Fred"});

db.animals.update({name: "Fred"}, {$set: { type: "Goose"}});

db.animals.find({name: "Fred"});

db.animals.remove({name: "Fred"});

db.animals.find();






db.dropDatabase();