var arr = [
    1,
    false,
    {
        name: 'Colton',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello '
        console.log(greeting + name)
    },
    "hello"
]

//Arrays can hold anything, even functions.

console.log(arr)
arr[3](arr[2].name)
//Logs "Hello Colton".
//Accessing and invoking the fourth element in the array, 
//and passing it the name property of the object in the third element.