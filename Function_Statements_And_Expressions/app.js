//Expression is a unit of code that returns a value.
//Doesn't need to save to a variable

var a;

//ex. a = 3 returns 3, 2 + 2 returns 4

if (a === 3) {
  //You always pass an expression into an if statement
  //a === 3 returns false
  //But the if statement itself is just a statement because it doesn't return a value
}

//In Javascript, since functions are objects, we have function statements and function expressions

greet()

function greet() {
  console.log("hi");
}
//This is a function statement because it doesn't return anything until the function is called.
//It gets put into memory, but doesn't return anything.

//anonymousGreet() 
//This won't work like greet() does and returns 'undefined is not a function'
//This is because when the Javascript engine is in the creation phase,
//It sets all variables to undefined and then goes and executes line by line.
//Function expressions aren't hoisted. It only hoists the variable (to undefined)

var anonymousGreet = function() { //Anonymous function
  console.log("hi");
};
//Since functions are objects, they can be stored in variables.
//This is a function expression since it returns something immediately.

anonymousGreet()//Now it works.

function log(a) {
    console.log(a)
}

log({
    greeting: "hi"
})
//Can pass in anything for a, including an object.

log(function() {
    console.log("hello")
})
//Functions are objects, so this works too.

function log2(a) {
    a()
}

log2(function() {
    console.log("hello")
    //Since Javascript uses first class functions, we can create and invoke a function on the fly
})