console.log(libraryName)
//If, in lib2, we didn't have an ||, it would log "Lib 2".
//In the html file, the code was just run one after another.
//libraryName is treated as a global variable in the global execution context.
//So lib1 declares libraryName and then lib2 declares libraryName which overrides it.

//In lib2.js we have: window.libraryName = window.libraryName || "Lib 2".
//|| returns the first true value, so it assigns libraryName to "Lib 1"

//This is used often in frameworks because it prevents values from colliding.
//If something already exists in the global object, it just won't show up at all.