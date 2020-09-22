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