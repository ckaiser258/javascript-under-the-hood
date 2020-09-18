console.log(this)
//Since this is in the global scope, 'this' points at window, the global object.

function a() {
  console.log(this)
  this.newvariable = "hello"
  //Since 'this' references the global object here, newvariable can now be accessed globally
  //since it's attached to the global object.
}

a()
//Still logs the window object.
//Still points to the global object if you're simply invoking the function

console.log(newvariable)
//Logs "hello"

var b = function() {
  console.log(this)
}

b()
//Still logs the window object.

var c = {
  name: 'The c object',
  log: function() {
    this.name = 'Updated c object'
    console.log(this)

    var setname = function(newname) {
      this.name = newname
    }
    setname('Updated again! The c object')
    console.log(this)
    //Still logs the same c object.
    //Doesn't seem to have changed the name...
    //The this keyword inside this function now points to the global object.
  }
}

c.log()
//Logs c object (and changes c.name to 'Updated c object').
//In the case where a function is a method that is attached to an object,
//the 'this' keyword becomes the object that the method is sitting inside of

console.log(window)
console.log(window.name)
//But in the case of the function inside the log method (setname), 
//we can see that it didn't change the containing object's name.
//However when we take a look at the window object, we can see name: "Updated again! The c object"

var d = {
  name: 'The d object',
  log: function() {
    var self = this
    //This objects are pointed in memory by reference,
    //self will be pointing to the same place in memory as the 'this' keyword at this point.
    //And right now the 'this' keyword is pointing at the object itself.
    //So we can fix the problem we had above by replacing all references to this with the variable self.
    self.name = 'Updated d object'
    console.log(self)

    var setname = function(newname) {
      self.name = newname
    }
    setname('Updated again! The d object')
    console.log(self)
  }
}

d.log()
//Now name is 'Updated again! The d object'.