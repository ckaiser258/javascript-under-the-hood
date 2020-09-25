var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2);
//Logs [2,4,6].

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
      //Add an item from arr processed by a functionn given into newArr
    );
  }
  return newArr;
}

//Now we can do the same thing as in the beginning but in a much better way:
var arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});

console.log(arr2);
//Logs [2,4,6].

//We can reuse the function to do entirely different work to the array:
var arr3 = mapForEach(arr1, function (item) {
  return item > 2;
});

console.log(arr3);
//Logs [false,false,true].

var checkPastLimit = function(limiter, item) {
  return item > limiter
}
//We have a problem here because the function in mapForEach only takes one parameter.
//We can use bind() to set a preset parameter.

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2))
//The first parameter is set as 1. So limiter is set to 1.
console.log(arr4)
//Logs [false, false, true].

//How can we prevent needing to call bind() all the time?

var checkPastLimitSimplified = function(limiter) {
  return function(limiter, item) {
    return item > limiter
  }.bind(this, limiter)
  //Returns a function with it's first parameter preset to the passed in limiter.
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2))
console.log(arr5)
//Logs [false, false, true].

//Start thinking about, how can I give functions functions?
//Or how can I return my functions from functions in order to greatly simplify things?

//Be careful to not mutate data from the tiny functions, try to return something new.

//Underscore and Lodash are very popular websites that have tons of 
//functional programming source code.

