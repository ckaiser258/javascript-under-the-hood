//When running this file, even if nothing is present, 
//Javascript still creates a global object (window)
//and 'this' which can be accessed in the dev console. (window = 'this')
//This is because the "execution context" was still created by the Javascript engine
//"Global" means not inside a function

//Since these are not inside a function, they are global objects
//Can see this in dev tools by typing a or window.a
//Or b or window.b
var a = 'Hello World!'
function b() {

}