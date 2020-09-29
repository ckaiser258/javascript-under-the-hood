//All objects have a prototype property {}
//Each object can have its own prototype

var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this EVER! For demo purposes only!!!
john.__proto__ = person
//We've now set the prototype of our john object to the person object
//So if the Javascript engine tries to find a property on john that doesn't exist on john,
//it will now go to person to try to find it.
//If it's not on person, it will go to whatever person's proto is
//and try to find it there.
console.log(john.getFullName())
//Logs "John Doe".
//Notice that the "this" variable in person knows to refer to the object that called the method.
console.log(john.firstname)
//Logs "John".
//Why don't we get "Default"?
//Because we're accessing the prototype of the john object.
//So if the Javascript engine looks for firstname and sees it, then it stops and doesn't go to person.
//This is because of the 'prototype chain'
//The Javascript engine starts at the top of a chain of objects and works it's way down.
//When it finds what it's looking for, it stops.

var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person
console.log(jane.getFullName())
//Logs "Jane Default".
//Prototype chain searches for firstname and finds it.
//Then it searches for last name and doesn't find it so it goes down the chain.
//It sees lastname on jane's prototype, person. So it uses that.