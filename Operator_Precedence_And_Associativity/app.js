//Operator precedence is which operator function gets called first.
//They are called in order of precedence (highest to lowest).
//Associativity is what order functions get called in (left-to-right or right-to-left) 
//when operator functions have the same precedence.

var a = 3 + 4 * 5 //Multiplication has higher precedence than addition, so it gets called first.
console.log(a)
//Logs 23.

var b = (3 + 4) * 5 //Grouping (...) has the highest precedence, so 3 + 4 gets called first.
console.log(b)
//Logs 35.

var a2 = 2, b2 = 3, c = 4

a2 = b2 = c

console.log(a2)
console.log(b2)
console.log(c)
//Logs 4 4 4.
//This is because the equals (Assignment operator) has right-to-left associativity.
//b = c => a = b
//The return value of the equals operator is a value.
//So b = c returns 4.
//Then a = 4.