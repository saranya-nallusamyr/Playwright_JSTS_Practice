//Array

//Creation
let num = []
num[0]=1;
num[1]=10;
console.log(num);

let a = [1,2,3,4]
console.log(a);

let a1 = Array.of(1,2,3,4);
console.log(a1);

//Array is a dynamic arrays in js - size can be increased.

let arr=[4,7,2,1,9];
arr[10]=100;
console.log(arr);

// Replace array values
let rep = ['a','b','c'];
console.log(rep);
rep[0]='z';
console.log(rep);


//let arrays
//redeclaring array - not allowed
let p = [1,2];
//let p=[3,4]; - error
console.log(p);

//reassigning allowed
let n = [1991,1992,1993];
console.log(n);
n=[1986,1987,1989];
console.log(n);

//const array
//redeclaring - not allowed
const c = [95,98,99];
//const c = [1,2,43,7]; - error
console.log(c);

//reassignment - not allowed -const
const i = ['apple','grapes'];
//i = ['berry','cherry'];
console.log(i); //error

//const - updating value - allowed
const j = ['ana','bru','cam'];
j[0]='Tim';
console.log(j);

//Heterogenous arrays - arrays with values of different datatypes
const emp = ['Tim',25,'SDET',true];

//Array iteration:
for(let i = 0;i<emp.length;i++){
    console.log(emp[i]);
    if (emp[i]=="SDET"){
        console.log("10% hike");
        break;
    }
}

// Array of - another way to create arrays
let z = Array.of('hi','hello','bye');
console.log(z);

//Array.from - converts string to char array
console.log(Array.from("Playwright"));
console.log(Array.from(123)); // works only on strings - for number, op is []


