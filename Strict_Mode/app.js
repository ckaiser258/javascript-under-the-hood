"use strict"
//Use strict must go at the top of a file or top of a function.

var person

persom = {}
console.log(persom)
//Without strict mode, no error. Logs an empty object.
//With strict mode:
//Uncaught ReferenceError: persom is not defined

//Can use use strict in functions to make their execution contexts strict.
//(this is used if use strict is not declared globally (at the top of the file))
//Needs to be at the top of the function
function logNewPerson() {
    "use strict"
    var person2
    persom2 = {}
    console.log(persom2)
}
logNewPerson()

//Use strict is not something you can always rely on because of difference in engines.
//But can be useful at times.
//If there are several files being concatenated into one file,
//if the first file has use strict at the top of the file,
//then all of the files (now combined into one file)
//will all have use strict.