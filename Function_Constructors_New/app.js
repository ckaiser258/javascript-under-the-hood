function Person(firstname, lastname) {

  console.log(this)
  //initially logs an empty object
  this.firstname = firstname
  this.lastname = lastname
  console.log('This function is invoked.')

}

var john = new Person('John', 'Doe')
console.log(john)
//Logs Person {firstname: 'John', lastname: 'Doe'}
//This is called a function constructor.
//We've used a function to construct an object.

//new is an operator
//When we say new, an empty object is created (like var a = {}).
//Then it invokes the function.
//The execution context generates 'this'.
//When you use new, it changes where the 'this' variable points.
//It now points to the new empty object.
//As long as the function doesn't return anything, the Javascript engine
//will return the object created by the new operator.

var jane = new Person('Jane', 'Doe')
console.log(jane)
//Logs Person {firstname: "Jane", lastname: "Doe"}
//Function constructors are just functions. The new operator doesn't change this.
//Putting the new operator in front of a function sets
//the 'this' keyword to a brand new empty object.
//And if the function doesn't return anything, it will return the object. Instead of undefined.