//Functions are a objects.
//First class functions means everything you can do with other types you can do with functions.
//Ex. assign to variables, pass them around, create on the fly.

//Functions are a special type of object.
//Name is optional (can be anonymous)
//Can add code as a property (the code in a function is not the function itself, it's a property of the function object)
//What's special about that property is it's invocable ().

function greet() {
    console.log('hi')
}

greet.language = 'english'
//Can add a property to a function since it's an object in Javascript.
console.log(greet.language)
//Logs 'english'.