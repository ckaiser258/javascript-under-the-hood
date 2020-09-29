//Reflection means an object can look at itself.
//Listing and changing its properties and methods.

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

for (var prop in john) {
  console.log(prop + ': ' + john[prop])
}
//Logs firstname: John
//lastname: Doe
//getFullName: function() {
//  return this.firstname + ' ' + this.lastname
//}

//for in grabbed everything not just on the object, but also on the object's prototype

for (var prop in john) {
  if (john.hasOwnProperty(prop))
    console.log(prop + ': ' + john[prop])
}
//Logs firstname: John
//lastname: Doe
//This is object reflection.
//Finding out what is on the actual object and not what it's linked to.
//Finding out what it's metadata is (what is actually on the object itself).

var jane = {
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname
  }
}

var jim = {
  getFirstName: function() {
    return firstname
  }
}

//Below is the same as _.extend in lodash (now that we're in ES6 we have the function below (Object.assign()))
//Object.extends() is not the same as _.extend (Object.assign() is.).
//Object.extends() is used to set the prototype for an object.

Object.assign(john, jane, jim)
console.log(john)
//This is "extending". We've extended the properties from other objects onto john.
//john now has all of the methods/properties of jane and jim, 
//as well as what he used to have.
//And still has all of the properties of his prototype.
//This is different than the prototype chain because this placed all of these
//properties onto the john object itself.