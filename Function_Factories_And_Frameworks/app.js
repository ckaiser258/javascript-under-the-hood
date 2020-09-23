//A factory is a function that makes something for you.
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === "en") {
      console.log("Hello " + firstname + " " + lastname);
    }
  
    if (language === "es") {
      console.log("Hola " + firstname + " " + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en')
//Function who's closure points to 'en'.
//'en' is available in memory to the inner function.
var greetSpanish = makeGreeting('es')
//Function who's closure points to 'es'.
//'es' is available in memory to the inner function.

//Both of the functions above get their own execution context.
//So when they're called, the function inside of it gets that unique language variable.

greetEnglish('John', 'Doe')
//Logs 'Hello John Doe'
greetSpanish('John', 'Doe')
//Logs 'Hola John Doe'

//makeGreeting is acting as a factory function.
//It takes advantage of closures to set the parameter value (language) inside the function that is returned.

//Using function factories allows you to make functions that have some parameters by default.
//By using closures.