function greet(whattosay) {

  return function (name) {
    console.log(whattosay + " " + name);
  };

}

greet('Hi')('Colton')
//Invoking a function that returns a function.
//Logs 'Hi Colton'.

var sayHi = greet('Hi')
sayHi('Colton')
//This works as well and logs 'Hi Colton'.

//Any function inside the function will have access to everything outside of it's memory space.
//Even though the execution context for greet() is gone, the memory space it created for 'whattosay' isn't.
//Here we can say the execution context has 'closed in' its outer variables.

function buildFunctions() {

  var arr = []

  for (var i = 0; i < 3; i++) {

    arr.push(
      function() {
        console.log(i)
      }
      //Push 3 anonymous functions into the array.
      //Remember, these functions aren't being called yet, only created.
    )

  }
  return arr
}

var fs = buildFunctions()

//Call all 3 functions inside the array within buildFunctions()
fs[0]()
fs[1]()
fs[2]()
//Logs 3 3 3.
//By the time we've left the for loop, i is 3.
//So the array now consists of 3 functions logging i.
//But by the time fs[0]() etc. is called (which is outside the function), they don't have access to a variable i.
//So they look outside (up the scope chain) and see that i === 3.
//So each function logs 3.
//The functions are only able to tell you what is in memory RIGHT NOW. Not at the time the function was created.
//Only right now, when we are executing the function.

