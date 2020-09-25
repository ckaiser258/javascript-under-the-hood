var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {

    var fullname = this.firstname + ' ' + this.lastname
    return fullname

  }
}

var logName = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName())
}

var logPersonName = logName.bind(person)
logPersonName()
//We pass the bind() function whatever we want to be the "this" variable when the function runs

//The reason we're not doing logName().bind is because we're simply using the function as
//an object and accessing its built-in bind() property.

//The bind() function returns a copy of logName and sets it up so whenever it is run,
//it has person as the 'this' variable

var logName2 = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName())
  console.log('Arguments: ' + lang1 + ' ' + lang2)
  console.log('--------------')
}

var logPersonName2 = logName2.bind(person)
logPersonName2('en')

logName2.call(person, 'en', 'es')
//.call() is the same thing as invoking a function "()"
//Difference is you can pass in what you want the 'this' variable to be at the same time
//It is similar to .bind() except it calls the function immediately

logName2.apply(person, ['en', 'es'])
//.call() and .apply() are the exact same thing, except .apply() expects an array for its parameters

//Function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

console.log(person.getFullName.apply(person2))
//This is function borrowing.
//We've taken the function from the person object
//and changed the 'this' keyword it uses to be person2 instead.
//Can do the same thing with call()

//This allows you to grab methods from other objects and use them.
//As long as you have similar property names so the function can use them.