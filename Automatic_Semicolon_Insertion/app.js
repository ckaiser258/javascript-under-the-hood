//Anywhere where the syntax parser expects a semicolon would be, it will put one for you. (ex. pressing return key)
//This is why explicitly typing semicolons in Javascript is optional
//Always put your own semicolons because you don't want the Javascript engine to make that decision for you

function getPerson() {
  return
  {
    firstname: "Colton";
  }
}

console.log(getPerson());
//Returns undefined

//Since the Javascript engine sees a carriage return (new line) after 'return'
//it automatically puts a semicolon.
//Therefore it quit out after the return key before even getting to the object

//Same thing as:
function getPerson() {
  return;
  {
    firstname: "Colton";
  }
}

function getPerson2() {
  return {
    firstname: "Colton",
  };
}
