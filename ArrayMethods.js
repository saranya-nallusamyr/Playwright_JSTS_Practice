// Array Methods

// push()
// pop()
// indexOf()
// shift()
// unshift()
// splice()

// push() - add value at the highest index (end)

let num = [1,2,3,4];
num.push(5);
console.log(num);

// pop() - remove the last value from array

num.pop();
console.log(num);

// shift() - remove the first value from array

num.shift();
console.log(num);

// unshift() - add value to lowest index 
num.unshift(7,8,9);
num.unshift(6);

console.log(num);

// indexOf
let arr = [1,2,3,1,2,4,5,1,3,8,9,1];
console.log(arr.indexOf(1));
console.log(arr.indexOf(1,arr.indexOf(1)+1));

c = arr.indexOf(3);
console.log(arr.indexOf(1, c+1+1));




