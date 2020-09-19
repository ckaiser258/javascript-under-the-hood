function greet(firstname, lastname, language) {
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log('-----------')
}

greet()
//In other languages this would cause an error. But Javascript doesn't care.
//Logs undefined 3 times
//This is because hoisting caused Javascript to already set firstname, lastname, and lanuage to undefined

//You can use the default parameters feature to get around this
function greet2(firstname, lastname, language) {
    language = language || 'en'
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log('-----------')
}
function greet3(firstname, lastname, language='en') {
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log('-----------')
}

greet('John')
greet('John', 'Doe')
greet('John', 'Doe', 'es')

greet2()
//Logs undefined, undefined, 'en'
greet3()
//Logs same as above.

function greet4(firstname, lastname, language) {
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log(arguments) //arguments is built-in to Javascript
    //Returns an array-like of all the paramaters passed
    //It is array-like because it doesn't have all the same features of an array
    console.log('arg 0: ' + arguments[0])
    console.log('-----------')
}

greet4('John', 'Doe', 'es')

function greet5(firstname, lastname, language) {

    if (arguments.length === 0) {
        console.log('Missing parameters!')
        console.log('-----------')
        return
    }

    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log(arguments)
    console.log('-----------')
}

greet5()
//Logs "Missing parameters!"

function greet6(firstname, lastname, language) {

    if (arguments.length === 0) {
        console.log('Missing parameters!')
        console.log('-----------')
        return
    }

    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log(arguments)
    console.log('-----------')
}