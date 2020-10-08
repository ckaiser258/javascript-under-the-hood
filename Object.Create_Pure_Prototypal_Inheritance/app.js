//Polyfill is code that adds a feature which an older engine may lack.
//If your browser doesn't have Object.create, this will run.
//If it does have it, it will be skipped.
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter.')
    }
    //Create an empty function
    function F() {}
    //Set the prototype of F() equal to the passed in function
    F.prototype = o
    //Return a new constructor function
    return new F()
    //1. new creates an empty object
    //2. runs the empty function
    //3. points the new prototype of that object to whatever you passed in
  }
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname
  }
}

var john = Object.create(person)
console.log(john)
//Logs an empty object.
//Object.create creates an empty object with its prototype pointing to
//whatever you passed in to .create().
//So john's prototype is the person object.

console.log(john.greet())
//Logs "Hi Default"

john.firstname = "John"
john.lastname = "Doe"

console.log(john)
//Logs {firstname: "John", lastname: "Doe"}
//We've overriden the "Default" values because the JavaScript engine doesn't
//need to look up the prototypal chain to find firstname and lastname anymore.

console.log(john.greet())
//Logs "Hi John"
//greet() works because the JavaScript engine looks up the prototypal chain
//and it finds greet() on john's prototype.

//Pure prototypal inheritance is creating an object,
//and using that object as the prototype for other objects.
//Allows us to add and mutate features on the fly.