// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    //nested object
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } this will not give right format it will concatenate obj1 and obj2 just after one another
// const obj3 = Object.assign({}, obj1, obj2, obj4) this is used to concatinate objects 

const obj3 = {...obj1, ...obj2} //latest and best format to concatenate 
// console.log(obj3);

//when we get data from database we get array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//VVVVVIMPPPPP
// console.log(Object.keys(tinderUser)); this gives all keys of objects and store it in format of array 
// console.log(Object.values(tinderUser)); this gives all values of objects and store it in format of array 
// console.log(Object.entries(tinderUser)); rarely used 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//DESTRUCTURE OF OBJECTS 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

 //const {key: alias}=objectname this is the better way of shorthand notation
//this process is known as destructuring for shortening the key names
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//this is json object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

