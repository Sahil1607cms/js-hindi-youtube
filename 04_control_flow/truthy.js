const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} all non empty strings are truthy values

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

//Object.keys()brings back array of objects
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 safety check, if value is null or undefined, assign other value that is 10
// val1 = undefined ?? 15 

Nullish Coalescing Operator (??)
val1 = null ?? 10 ?? 20 //Output: 10 (first non-null/undefined value)
console.log(val1); //Output: 10 (first non-null/undefined value)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


TAKEAWAYS!!!!
Truthy/Falsy values help determine conditional execution.
Empty objects and arrays need special checks (Object.keys(obj).length === 0 for objects, .length === 0 for arrays).
?? (Nullish Coalescing) provides a default value only for null or undefined.
Ternary operators (? :) provide a compact way to write conditional logic.
