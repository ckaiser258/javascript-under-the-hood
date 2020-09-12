console.log(1 < 2 < 3)
//Logs true.

console.log(3 < 2 < 1)
//Logs true also.
//< has left-to-right associativity.
//3 < 2 returns false
//So what's being ran is (false < 1).
//Javascript sees a boolean is being compared to a number so it coerces false into a number.
console.log(Number(false)) //Number() coerces the argument into a nunber
//Logs 0.
//0 < 1 returns true.

console.log(1 < 2 < 3)
//This is actually (true < 3)
//Number(true) is 1.
//So (1 < 3) returns true.

console.log(Number(undefined))
//Logs NaN.
console.log(Number(null))
//Logs 0.
//This is why sometimes coercion is confusing.

console.log(false == 0)
//Logs true.

var a = false
console.log(a == 0)
//Logs true.
//Another thing that can happen in the real world and cause confusion.

console.log(null == 0)
//Logs false.
//But...
console.log(null < 1)
//Logs true.
//Comparison operators can cause strange errors because of ways they behave.
console.log("" == 0)
//Logs true.
console.log("" == false)
//Also logs true.

//=== (strict equality) Compares two things but doesn't try to coerce the values.
console.log("3" === 3)
//Logs false.
//Using === prevents odd bugs from occuring in your code.

var a = 0
var b = false

if (a == b) {
    console.log("They are equal!")
} else {
    console.log("Nope, not equal!")
}
//Logs "They are equal!"
if (a === b) {
    console.log("They are equal!")
} else {
    console.log("Nope, not equal!")
}
//Logs "Nope, not equal!"

//Lesson is try to do comparisons on things that you know will be the same type.
//Never use == unless you explicitly want to coerce the two values and you're aware of the implications.
//=== and !== should be your default.