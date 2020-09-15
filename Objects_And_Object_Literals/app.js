var person = {}
//This is called an object literal.
//The same as new Object().
var person2 = { 
    firstname: 'Tony', 
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
}

console.log(person)
console.log(person2)

function greet(person) {
    console.log ('Hi ' + person.firstname)
}

greet(person2)

//Can also pass an object on the fly using object literal syntax
greet({
    firstname: 'Mary', 
    lastname: 'Doe'
})

//Can add an object to an object on the fly by combining . and object literal syntax.
person2.address2 = {
    street: '333 Second St.'
}
//This works because, even though it all looks different, 
//it's all doing the exact same thing under the hood in the Javascript engine.