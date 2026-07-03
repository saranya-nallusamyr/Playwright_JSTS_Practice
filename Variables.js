// var let const

//var
var x =10;
console.log(x);

// redeclaration is allowed
var x = 20;
console.log(x);

// reassignment is allowed
var a = 1;
a = 5;
console.log(a)

// Declaring but not initializing
var no;
console.log(no);

// Hoisting allowed
console.log(name);
var name = "Jim";

//....................................................

//let

let car = "BMW";
console.log(car);

// redeclaration is not allowed - let
// let car = "Audi";
// console.log(car);

// reassignment is allowed - let
car = "Audi";
console.log(car);

// initializing but not decalring - allowed: let
let emp;
console.log(emp);

// Hoisting - Error - let
// console.log(animal);
// let animal;

//..............................................

// const

const PI = 3.14;
console.log(PI);

// redeclaring - not allowed
// const PI = 123;
// console.log(PI);

// reassignment - not allowed
// PI = 78;
// console.log(PI);

// initializing - not declaring - not allowed
// const Days;
// console.log(Days)

// hoisting - error
// console.log(java);
// const java;






