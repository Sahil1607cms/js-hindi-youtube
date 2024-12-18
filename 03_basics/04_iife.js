// Immediately Invoked Function Expressions (IIFE)
//why is it used ? when file has database immediately it should be executed
//also used for preventing global scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon becomes necessary for iife

//syntax (function definition)()
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

