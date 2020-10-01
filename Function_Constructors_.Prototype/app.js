function Person(firstname, lastname) {

  console.log(this)
  this.firstname = firstname
  this.lastname = lastname
  console.log('This function is invoked.')

}

var john = new Person('John', 'Doe')
console.log(john)

var jane = new Person('Jane', 'Doe')
console.log(jane)

//All functions, along with an optional name and their code,
//have a .prototype property.
//It starts as an empty object and is only used if you're using
//your function as a function constructor.
//As soon as you use the 'new' operator to invoke your function (construct an object),
//then it means something.
//The prototype property on a function is NOT the prototype OF the function (__proto__).
//It's the prototype of any objects created by the function as a function constructor.

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname
}

//john and jane both point to Person.prototype.
//So they'll both get access to getFullName() now.

console.log(john.getFullName())
//Logs 'John Doe'.

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname
}

console.log(john.getFormalFullName())
//Logs 'Doe, John'.

//.prototype allows us to add methods to lots of objects all at once (both john and jane in this case)
//even after they're created.

//Often you'll see that properties are set up inside the function constructor but
//methods are sitting in prototypes.
//The reason for this is since functions are objects, anything you add to them takes up memory space.
//So adding getFullName() inside the Person constructor would cause every object
//created by it to have their own copy of getFullName(), which can cost lots of memory.
//But adding it to the .prototype means you only have one.