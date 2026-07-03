//Loose equality == compares only values
//Strict equality === compares both values and types

console.log(1=="1"); //true
console.log(1==="1"); //false

console.log("Sara"=="sara"); //false // JS is case sensitive
console.log("Sara"==="sara"); //false
console.log("Sara" === "Sara"); //true

console.log(true == "true"); //false bcz true becomes 1. 1 == "true" is false
console.log(true === "True"); //false
console.log(1 == true); //true
