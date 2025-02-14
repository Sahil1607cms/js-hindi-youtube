// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //only way of accessing symbols in object is using square brackets 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
//access it using square bracket only 
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
//Freezing an object makes it immutable: after freezing no changes will be made to the object, also no error will be shown if we try to change the value after freezing 
//Since JsUser is frozen, this assignment will silently fail (in non-strict mode).
//If you are in strict mode ("use strict";), JavaScript will throw a TypeError.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //display original name hitesh....


//this greeting will act as variable(key) and it will have this function 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    //referencing to same object 
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
