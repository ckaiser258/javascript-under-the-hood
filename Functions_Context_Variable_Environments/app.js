//The values of a variable are specific to scope.
//Each 'myVar''s value below is different even though they all have the same name.
//They don't affect each other since they are in separate execution contexts.
//The value is specific to the function it's declared in.

function b() {
    var myVar
    console.log(myVar)
}

function a() {
    var myVar = 2
    console.log(myVar)
    b()
}

//Code below is attached to the global execution context
//Since it is outside a function
var myVar = 1
console.log(myVar)
a()
console.log(myVar)

//Console returns:
//1
//2
//undefined
//1 (remains unchanged since we're back inside the global execution context)