var a

//goes to internet and looks for value

//if coerces it's arguments to a boolean.
if (a) {
    console.log('Something is there.')
}
//var a is currently set as undefined due to the creation phase
//of the execution context setting up space for the variable.
//Undefined converts to false since it implies a lack of existence.

a = "hi"
if (a) {
    console.log('Something is there.')
}
//Now a exists and is true, so 'Something is there.' is logged.

a = 0
//Even though 0 exists, it still converts to false in Javascript
if (a) {
    console.log('Something is there.')
}
//Will not show up.

if (a || a === 0) {
    console.log('Something is there.')
}
//Way around this issue.
//|| (logical OR) has a lower precedence than === (strict equality).
//So first, a === 0 coerces to true
//if (a || true)
//Then, a is coerced to false since it is equal to 0
//if (false || true)
//false || true returns true
//So it becomes if (true) and the command is run.