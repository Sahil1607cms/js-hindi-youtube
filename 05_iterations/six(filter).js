const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    console.log(item);
    //this return is just working like dummy return since foreach always return undefined, even if we return true here ,the value returned will be undifined 
    //forEach doesnt return anything
    return item
} )
console.log(values);


// FILTERS
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//storing the element greater than 4 in newNums array 
//only those values will be returned where condition is true
const newNums = myNums.filter( (num) => {
    return num > 4
} )

// FILTER ALTERNATIVE TRADITIONAL
const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//userBooks will contain History genre books
  let userBooks = books.filter( (bk) => bk.genre === 'History')

//userBooks will be updated and those books will be stored where the year is >=1995
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
