var a
console.log(a)

if (a === undefined) {
    console.log('a is undefined!')
} else {
    console.log('a is defined!')
}

//undefined is a special keyword in Javascript and is not the same as 'not defined'.
//If you type console.log(a) without ever typing var a. You get an error that a is not defined.
//This is proof that undefined does not mean 'not defined'.
//Never explicitly set a variable equal to undefined (even though you can).
//If you set values equal to undefined, it's confusing because you won't know if it was set to undefined by you or Javascript.