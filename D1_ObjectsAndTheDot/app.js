var person = new Object();

person["firstname"] = "Tony"; //[] is called computed member access operator
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname); // . is called member access operator
//Is only 1 higher level in precedence than []

//Member means "member of the object".

console.log(person.lastname);

//Can make an object a member of the object.
person.address = new Object();
person.address.street = "111 Main St.";

//The precedence associativity of the . (member access operator) is left-to-right.
//So the left-most . gets called first, finds that object in memory,
//then moves onto the right and finds the next object in memory.

person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street)
console.log(person.address.city)
console.log(person["address"]["state"])
//[] (computed member access also has left-to-right associativity).
//. is preferred due to it being easier and more clear.