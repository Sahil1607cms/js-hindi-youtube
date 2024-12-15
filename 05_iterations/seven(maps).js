const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//The map method is used to transform each element of the array.
//there is no need to use for loop
//map automatically iterates over the whole array
const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
