var a = 3;
console.log(typeof a);
//number

var b = "Hello";
console.log(typeof b);
//string

var c = {};
console.log(typeof c);
//object

var d = [];
console.log(typeof d); // weird!
//object
//(not very helpful)
console.log(d.toString())
//''
//(also not very helpful)
console.log(Object.prototype.toString.call(d)); // better!
//[object Array]
//toString uses the 'this' variable.
//So we're grabbing the global object's prototype which has a toString property,
//and using .call(d) to set the 'this' variable to d.

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
//object
console.log(e instanceof Person);
//true
//instanceof returns true if e is an instance of Person anywhere down the prototype chain.

console.log(typeof undefined); // makes sense
//undefined
console.log(typeof null); // a bug since, like, forever...
//object

var z = function() { };
console.log(typeof z);
//function
