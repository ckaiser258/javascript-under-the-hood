//A namespace is a container for variables and functions.
//It is typically used to keep variables and functions with the same name separate.
//Javascript doesn't have namespaces.

var greet = "Hello!";
var greet = "Hola!";

console.log(greet);
//This logs "Hola!" since the greet variables collide with each other in the global environment.

//We can fake namespace in Javascript by using objects.
//It's commonly used in frameworks and libraries.
var english = {};
var spanish = {};

english.greet = "Hello!";
spanish.greet = "Hola!";

console.log(english);
