//Invocation is when a function is called ().
//Any time you invoke a function, a new execution context
//is created and put on top of the "stack".

//1. Global execution context is created ("this", "window", etc.) and placed at the bottom of the stack

function a() {
    b()
    //4. c is created now that b() has ran
    var c
}

//3. b() is invoked in a() and placed at the top of the stack, and executed.
function b() {
    var d
}

//2. a() is the first function invoked, and placed next on the stack
a()

//5. d is finally created
var d