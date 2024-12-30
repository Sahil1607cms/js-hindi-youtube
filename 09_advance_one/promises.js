//A PROMISE IS AN OBJECT
//PROMISE REQUIRES A CALLBACK, RESOLVE AND REJECT AND PREVENT CALLBACK HELL 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

INTERVIEW QUES)If there is error 404 in promise then will it be in resolve or reject 
ANS) We will always get it in response 

//AGAR RESOLVE HUA, THEN IT MOVES TO .then (agar line 8 hai resolve() tb hi .then ke andar control aayega)
promiseOne.then(function(){
    console.log("Promise consumed");
})

//it is not necessary to store promise in a variable always 
//here we are combining two parts into 1 part only resolve .then same place 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //we can pass object data using resolve , object is passed mostly as data 
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

//whole object will be passed as parameter 
promiseThree.then(function(user){
    //whole object will be printed
    console.log(user);
})

//using reject concept
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
     .then((username) => { //chaining is being done 
    console.log(username);
     //reject comes here directly and skips .then
})
     .catch(function(error){
    console.log(error);
})   //this tells whether it is resolved or rejected and is executed always 
     .finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//promise can be handled with async await as well, mostly used in databases, prefer async await 
//it is similar to .then .catch, it says dont move ahead if database conncection fails 
//use try for resolve and catch will handle reject 
//both syntax are similar 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


!!!!!!!!!!!
FETCH sabse pehle execute hota hai bcoz it has its own special queue called MICROTASK QUEUE (priority queue) vip line 
so setTimeout of 1 second and fetch of 1 second, fetch will be executed first 
// async function getAllUsers(){
//     try {
          fetching takes time hence await is required 
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
          data comes in string format we change it to json
          also the response.json should be AWAITED since it takes time 
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//this is better format and easy to understand 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
