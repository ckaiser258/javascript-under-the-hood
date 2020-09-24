function sayHiLater() {

  var greeting = "Hi!"

  setTimeout(function() {
    console.log(greeting)
  }, 3000)

}
//This is an example of a function expression and a closure.
//sayHiLater() runs, then setTimeout runs which takes a function as a parameter (since JavaScript has first class functions) as well as a number
//The function is a function expression since it's created on the fly.
//After sayHiLater() runs, setTimeout() needs to look up the scope chain to find greeting
//It finds it in memory and calls the function expression inside of it.

sayHiLater()

//Functions that do something after you run another function is called a callback function.
//Function executes, then it in turn executes another function once it's done.

//A callback function is a function you give to another function, to be run when the other function is finished
//So the function you call 'calls back' by calling the function you gave it when it finishes.

function tellMeWhenDone(callback) {

  var a = 1000; //some work
  var b = 2000; //some work

  callback();// the 'callback'

}

tellMeWhenDone(function() {
  console.log('I am done!')
})

tellMeWhenDone(function() {
  alert('I am done!')
})