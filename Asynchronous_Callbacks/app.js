//While Javascript is synchronous (one line at a time), it still interacts with the browser, http requests, etc.
//Javascript has its execution stack,
//And there's another list that sits inside the Javascript engine called the event queue.
//Examples of things in the event queue can be click events or http requests.
//It isn't really asynchronous.
//The event queue doesn't get read until the execution stack is empty.
//Once the stack is empty, the Javascript engine waits for an event, and if an event calls a function to be called
//then it will appear on the execution stack and run like normal.

//long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime()
    while (new Date() < ms){}
    console.log('finished function')
}

function clickHandler() {
    console.log('click event!')
}

//listen for the click event
document.addEventListener('click', clickHandler)

waitThreeSeconds()
console.log('finished execution')
//If you click while the page is loading (during the 3 seconds), the console only logs 'click event!' 
//after both the function and the global code have finished running/logging their text.
//This does not work on Chrome, 
//but the click events still can't be recorded until the function and global code have finished running.
//This is why long running functions can interrupt events being handled.

//Thus, asynchronous callbacks happen in Javascript, but it's more about what's happening outside the Javascript engine.