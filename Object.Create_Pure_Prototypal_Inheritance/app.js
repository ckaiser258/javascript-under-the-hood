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