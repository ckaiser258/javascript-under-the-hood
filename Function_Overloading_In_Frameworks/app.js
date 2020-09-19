function greet(firstname, lastname, language = "en") {
  if (language === "en") {
    console.log("Hello " + firstname + " " + lastname);
  }

  if (language === "es") {
    console.log("Hola " + firstname + " " + lastname);
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, "es");
}

greet("John", "Doe", "en");
greet("John", "Doe", "es");

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");

//This is used often in libraries and frameworks 
//because it makes it easier to use and understand what it's doing.
