  // ❓ Questions ❓\\

// ❔  1. What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
// 👷‍♂️ Answer:  The main purpose of creting a modal with an interface and schema in mongodb is define structure and behavior of a collection. It helps to Strcture defination, Code reusability, and ODM features



// ❔  2. Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
// 👷‍♂️  Answer:  By field filtering we can get specific field which should be included or excluded in return document. This features allows to retrive a large ammount data  



// ❔  3.  What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
// 👷‍♂️  Answer:  Instance methods are functions that are defined on individual document instances of a particular model.  They allow to add specific functionality or perform operations tailored to each document. 
const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  password: String
});

// Define a custom instance method
personSchema.methods.getPersonName = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Create the model
const User = mongoose.model('Person', personSchema);

// Create a document
const user = new User({
  name: 'Ray Nick',
  email: 'ray@gmail.com',
  number: '01928323',
  password: '02jof8w'
});

// Call the custom instance method
user.getPersonName(); 





// ❔  4. How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.
// 👷‍♂️  Answer: "$ne," "$gt," "$lt," "$gte," and "$lte" are used to conditional queries to retrive document data. Examples

//  "$ne" (not equal):
db.users.find({ age: { $ne: 30 } });


// "$gt" (greater than):
db.products.find({ price: { $gt: 100 } });


// "$lt" (less than):
db.orders.find({ quantity: { $lt: 10 } });


// "$gte" (greater than or equal to):
db.books.find({ age: { $gte: 20 } });


// "$lte" (less than or equal to):
db.customers.find({ salary: { $lte: 5000 } });





// ❔  5. What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
// 👷‍♂️  Answer: In mongoDB's "$in" and "$nin" operators are used for matching array of values .

// "$in" Operator used to match where any fields value are specified array
db.users.find({ role: { $in: ["age", "gender"] } });


// "$in" Operator used to doesn't match where any fields value are specified array
db.customers.find({ status: { $nin: ["Education", "name"] } });

