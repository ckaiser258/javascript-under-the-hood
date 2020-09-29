var a = {}
var b = function() { }
var c = []

console.log(a.__proto__)
//Logs the base object. The very bottom of the prototype chain.
//Everything eventually leads to the base object.
//Typing a.__proto__. in dev tools brings up list of properties/methods for the object.

console.log(b.__proto__)
//Logs an empty function.
//This is the prototype of all functions.
//b.__proto__. allows for some familiar methods and properties.
//Including apply, bind, call, etc.
//This is why all functions get access to these methods.
//Each has access to this built-in object.

console.log(c.__proto__)
//Logs an empty array.
//c.__proto__. brings up the built-in array methods. (push, pop, indexOf, etc.)
//This is why you can access these methods whenever you want.
//The Javascript engine looks for .pop() as a property on your array and doesn't find it.
//So it checks the .__proto__ of the array and finds it.