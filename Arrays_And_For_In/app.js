var arr = ['John', 'Jane', 'Jim']

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop])
}
//Logs
// 0: John
// 1: Jane
// 2: Jim

//Arrays in JavaScript are objects, so we can use them like objects.
//When we point to arr[0] arr[1] etc. in an array, that index number is actually a key in
//a key value pair. The value being the actual item in the index.
//This is why we can use [] to grab things in arrays. Just like an object!

Array.prototype.myCustomFeature = 'cool!'

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop])
}
//Logs
// 0: John
// 1: Jane
// 2: Jim
//myCustomFeature: cool!

//myCustomFeature is now on the prototype of all arrays, so it now gets logged with arr.
//For arrays, we don't use for in for this reason.
//Libraries and frameworks can have custom prototype features like the one above.
//Stick with for of or for loop. Otherwise, since arrays are objects,
//you can iterate all the way down into the prototype.