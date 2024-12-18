const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//The map method is used to transform each element of the array.
//there is no need to use for loop
//map automatically iterates over the whole array and returns the updated value
const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) //all nums will be multiplied by 10 and stored
                .map( (num) => num + 1)  //the updated array will add 1 to each value
                .filter( (num) => num >= 40) // filtering the values which are greater than= 40

console.log(newNums);
