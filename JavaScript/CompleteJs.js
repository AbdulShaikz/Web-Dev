/* 01 - Basics: 
variables, datatypes, conversion, comparision. 
strings, nums and Math, dates,
arrays, objects */

//variables

// var var1 = 5;
// console.log(`Var var1: ${var1}`);                   //5
// var1 = 8;
// console.log(`Var var1: ${var1}`);                   //8
// var var1=10;                                        // Allows redeclarion of the variable with the same name

// let var2 = 8;
// console.log(`Let var2: ${var2}`);                   //8
// var2 = 10;
// console.log(`Let var2: ${var2}`);                   //10
// // let var2 = 16;                                   //Doesn't allows the declaration of a variable with same name (resulting syntax error)


// const var3 = 10;
// console.log(`Const var3: ${var3}`);                 //10
// // var3 = 16;                                       //Cannot assign to a constant variable (resulting type error)
// console.log(`Const var3: ${var3}`); 
// // const var3 = 16;                                 //Doesn't allows the declaration of a variable with same name (resulting syntax error)


//Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

// let createdDate = new Date(2023,0,23,5,3)
// console.log(createdDate.toString())


// let createdDate2 = new Date("01-29-2023")
// console.log(createdDate2.toLocaleString())

let timestamp = Date.now()
console.log(timestamp)