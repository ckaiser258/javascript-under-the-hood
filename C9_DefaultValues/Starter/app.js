function greet(name) {
    console.log('Hello ' + name)
}

greet("Colton")

//If there's no argument passed to greet() Javascript doesn't care.
//It will still pass nothing to name.
greet()
//Logs "Hello undefined".

//When the execution context for greet() is created,
//Javascript sets aside memory space for name as undefined.
//Name is never set so it stays as 'undefined'.
//Then Javascript coerced undefined into the string 'undefined' and concatenated the sentence.

//Aside from using the ES6 default value syntax (name="hello"),
//this works as well and applies to some other languages too.
function greet2(name) {
    name = name || '<Your name here>'
    console.log('Hello ' + name)
}
greet2()
//Logs "Hello <Your name here>"
//|| has a higher precedence than = so it is run first.
//|| returns '<Your name here>' since it is the first truthy value.
//Then we end up with name = '<Your name here>'.

greet2('Colton')
//Logs "Hello Colton"
//"Colton" is the first truthy value in the || statement, so that is what is returned.
//We are left with name = "Colton".

//The || (logical OR) operator doesn't return true or false.
//It returns the value that can be coerced to true.
console.log(undefined || "hello")
//Logs "hello"

console.log("hi" || "hello")
//Logs "hi" because it returns the first value that can be coerced to true.

console.log(0 || 1)
//Logs 1.

