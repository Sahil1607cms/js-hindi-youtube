const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

 // OR WE CAN USE 

coding.forEach( (item) => {
    console.log(item);
} )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) just give reference as arguement, dont pass printMe() whole funtion

//foreach has various parameter access like item ,index and whole array
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//array of objects 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
