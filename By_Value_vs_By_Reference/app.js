//by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);
//Logs 2, 3.
//Since a is a primitive, b gets set by value.
//This means b just creates a copy in memory of whatever a equals
//That's why when we changed a, b stayed the same.
//When we set b, it was the same as setting equal to 3. A separate 3.
//This is called "by value" and happens with primitives

//by reference (all objects (including functions))
var c = { greeting: "hi" };
var d;

d = c;

//d gets set by reference. This happens with all objects (including functions).
//This means they are not copies in different areas of memory.
//They both point to the same place in memory.

c.greeting = "hello"; //mutate
//Mutate just means to change something.
//Immutable means it can't be changed.

console.log(c);
console.log(d);
//d's greeting is "hello" as well since both variables are pointing to the same place in memory.
//Thus, with objects, once you change one, you change the other.

//by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = "hola" //mutate
}

changeGreeting(d)
console.log(c)
console.log(d)

//Both c and d both have "hola" now

//Equals operator sets up new memory space (new address)
c = { greeting: "howdy"}
console.log(c)
console.log(d)
//c and d are now different.
//The equals operator saw that the object literal wasn't something that already had a place in memory,
//it had to set up a new spot in memory for the object to live.
//So by reference doesn't apply in this case because c and d are now pointing to two separate places in memory.