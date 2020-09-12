//Coercion is converting a value from one type to another.
//This happens often in Javascript since it is dynamically typed.

var a = 1 + "2";
console.log(a);
//Logs '12'.
//1 was coerced into a string. From 1 to '1'.

var a2 = 1, b = '2'

console.log(a2+b)
//Logs '12'. This is where it can get confusing in real life.
//What if a2 and b were defined in totally different areas of the code?
//Understanding coercion makes it easier to track this down.