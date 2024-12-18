const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        //always refer to current context using this
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() this will change the name to sam from hitesh, context is changed 

// console.log(this); output: {}(empty object) in nodejs, and window(global object) methods in browser  

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); prints undefined, because this is used in object only not in functions mainly 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); also undefined same concept as above
// }

//THERE IS NO THIS IN ARROW FUNCTION
const chai =  () => {
    let username = "hitesh"
    console.log(this); //undefined 
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //using curly braces then write return
// }

// const addTwo = (num1, num2) =>  num1 + num2   // this is implicit return, no need to write return since no curly braces are there 

// const addTwo = (num1, num2) => ( num1 + num2 )

//objects need to be within curly braces
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
