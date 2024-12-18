const myNums = [1, 2, 3]

//concept used in shopping cart
const myTotal = myNums.reduce(function (accumulator, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) //accumulator will store 0 in the first iteration only for the first time, it will then be updated and keep on changing 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

//array of objects
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
