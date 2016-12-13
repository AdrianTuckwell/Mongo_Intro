use codeclan;

db.students.insert(
    [
      {
        name: "John",
        favouriteFood: "Pizza"
      },
      {
        name: "Ross",
        favouriteFood: "Apples"
      }
    ]
  );

db.instructors.insert(
  [
    {
      name: "Sian",
      favouriteFood: "soup"
    },
    {
      name: "Allan",
      favouriteFood: "beer"
    },
    {
      name: "Darren",
      favouriteFood: "potatoes"
    }
  ]
);



show collections;
db.students.find();
db.instructors.find();

db.students.totalSize();

//db.students.validate();

db.dropDatabase();