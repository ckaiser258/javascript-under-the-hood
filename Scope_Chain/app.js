//Scope is where a variable is available in your code.

//Function b() is sitting lexically in the global scope. Where myVar = 1
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

//Console returns 1
//When you ask for a variable inside any execution context, if it can't find it it will refer to the outer environment.
//Even though b() is called inside a(), b() is defined on the global level
//So it will refer to the global execution context.
//This is why it logs 1 instead of 2 or undefined.

function a2() {
  //Now b2() is defined inside a2(), so when we console.log myVar2, it will log whatever it's value is in a2()
  //a2() is it's outer scope.
  function b2() {
    console.log(myVar2);
  }
  var myVar2 = 2;
  b2();
}

var myVar2 = 1;
a2();
//Console returns 2
//If we didn't define myVar2 in a2() it would log 1 since it keeps going outside the chain until it finds a value.

//We cannot call b2() in the global environment because it's not defined in the same scope (it's defined in a2())

//Once a function is invoked, the Javascript engine creates an outer reference for that execution context
//This outer reference is based on where the code was written in the Javascript file.
//This is called the scope chain. Where can the function access the variable.
//And the chain is the links of outer references (lexical. aka where it was written in your code)