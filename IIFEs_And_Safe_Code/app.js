//IIFEs are like other functions in that they have their own execution context.
//Anything declared inside an IIFE can't be accessed globally, just like other functions.
//This is what makes them so useful.

(function(name) {
  var greeting = 'Hello'
  console.log(greeting + ' ' + name)
}('Colton'))
//Logs 'Hello Colton'
//Since greeting is defined inside the function, it doesn't collide with the greeting variable in greet.js
//even though they are both stacked in index.html.

console.log(greeting)
//Logs 'Hola'

//This is why in many libraries and frameworks you'll see the entire file wrapped in parentheses and function.
//It wraps it's whole code in an IIFE to keep the code safe.