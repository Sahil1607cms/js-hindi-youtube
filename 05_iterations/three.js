// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
// for...of Loop (Iterating Over Arrays & Strings)
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)// Prints each character of the string
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // Duplicate, so ignored


// console.log(map);  // Outputs the map without duplicates

//we use for.....of for maps 
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for...of Doesn't Work for Objects
//for..of throws error in terms of object iteration 
// for (const [key, value] of myObject) {  //not iterable using this method
//     console.log(key, ':-', value);
    
// }
 Correct Way to Iterate Over Objects (Using for...in or Object.entries())
for (const key in myObject) {
    console.log(key, ':-', myObject[key]); // Works with objects
}

// OR using Object.entries()
Object.entries(myObject).forEach(([key, value]) => {
    console.log(key, ':-', value);
});

for...of is best for iterating over arrays, strings, and Maps.
Maps store unique key-value pairs and maintain insertion order.
Objects are not iterable with for...of, but for...in or Object.entries() can be used.
