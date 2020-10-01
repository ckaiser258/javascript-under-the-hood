var a = new Number(3)
//This is a function constructor (uses the 'new' keyword and JavaScript even has the first letter capitalized)
console.log(a)
//Logs Number {3}
//Since new creates an object.

//These objects have a prototype as well.
console.log(a.toString())
//toString() is a method for objects on the Number prototype

var b = new String("John")
console.log(b)
//Logs String {0: "J", 1: "o", 2: "h", 3: "n"}
console.log(b.length)
//length is a property of the String prototype.

//These built-in function constructors make it look like you're creating primitives, but you're not.
//You're creating objects that contain primitives.

console.log("John".length)
//This is still actually the JavaScript engine creating a String object and grabbing the
//.length property from the prototype!
console.log(new String("John").length)
//This is doing the same thing!

var c = new Date("3/1/2020")
console.log(c.getMonth())
//This is actually:
console.log(new Date("3/1/2020").getMonth())
//And .getMonth() is coming from the Date prototype.

//We can add new features to these prototypes.
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit
}

console.log("Colton".isLengthGreaterThan(3))
//Logs true.
//"Colton" was converted to a string object automatically.
//String now has our isLengthGreaterThan() function on its prototype, so all strings now have access to this method.

//Many libraries use this concept to add features.

Number.prototype.isPositive = function() {
  return this > 0
}

//console.log(3.isPositive())
//This throws an error because, while JavaScript can convert strings to objects automatically,
//it doesn't do so for numbers.

var d = new Number(3)
console.log(d.isPositive())
//Logs true.
//This works since we made used the Number constructor to make 3 an object.