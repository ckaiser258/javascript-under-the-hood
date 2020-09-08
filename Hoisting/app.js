//When placing this here, we get b() and a in the console w/ no errors.
//b() returns 'Called b!' and a returns undefined
//a doesn't cause an error even though it's called before it's defined.
//This phenomenon is called 'hoisting'.
b()
console.log(a)

var a = 'Hello World!'

function b() {
    console.log('Called b!')
}

//Hoisting is NOT moving code to the top of the page.
//Hoisting is how the Javascript engine sets aside memory space for the variables you've created
//and all of the functions you've created as well before it starts executing your code line by line.
//So when it begins executing your code line by line it can access them.
//Functions are saved in memory in entirety (which is why b() worked ahead of being created)
//but variables aren't assigned anything until they're executed line by line.
//So the Javascript engine puts a placeholder called undefined.
//All variables are initially set to undefined.
//And functions are set in their entirety.
//That's why it's never a good idea to rely on hoisting.