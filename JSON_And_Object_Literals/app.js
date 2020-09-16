var objectLiteral = {
    firstname: "Mary",
    isAProgrammer: true,
  };

//JSON is the primary way data is sent across internet
//Object literals and JSON look similar but they're not
  
var json = { "firstname": "Mary", "isAProgrammer": true};
//Properties need to be wrapped in quotes for JSON.
//THIS WORKS WITH OBJECT LITERALS AS WELL but is required in JSON.
//Anything that is JSON valid is valid object literal syntax.
//But not always the other way around.
  
var json2 = '{ "firstname": "Colton", "isAProgrammer": true}';
  
console.log(JSON.stringify(objectLiteral))
//Stringify makes an object literal into JSON syntax to send it to a server etc.
console.log(JSON.parse(json2))
//Parse makes a string (JSON) and converting it into an object.