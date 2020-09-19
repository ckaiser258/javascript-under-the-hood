//Immediately Invoked Function Expression

//function statement
function greet(name) {
  console.log("Hello " + name);
}

greet('Colton');

//using a function expression
var greetFunc = function (name) {
  console.log("Hello " + name);
};
greetFunc('Colton');

//using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
  return 'Hello ' + name
}()
//Can immediately invoke a function at the point of creation.
//Creates a function object and immediately invokes it.

console.log(greeting)
//Works like greeting()
//Logs "Hello undefined"

var greeting2 = function(name) {
  return 'Hello ' + name
}('Colton')

console.log(greeting2)
//Works like greeting('Colton')
//Logs "Hello Colton"

//greeting() or greeting2("Colton") would cause an error

3;
"I'm a string";
{
  name: 'Colton';
}
//This is valid Javascript and doesn't cause an error upon running even though they were never assigned

// function(name) {
//   return 'Hello ' + name
// }()
//This doesn't work because function expressions (functions created on the fly) need something before it (a name etc.).
//So it renders it as a function statement and realizes it doesn't have a name which throws an error.


(function(name) {
  var greeting = 'Hello'
  console.log(greeting + ' ' + name)
}('Inside IIFE: Colton'))
//Wrapping functions in parentheses fixes this, and is the most accepted way.
//This allows us to call a function expression without needing to assign it a name
//Parentheses is an operator and it's only used with expressions.
//Therefore the Javascript engine assumes that the function inside of it is an expression and it works.
//This is the most common way to use an IIFE.

//IIFEs are used in almost every modern framework today.