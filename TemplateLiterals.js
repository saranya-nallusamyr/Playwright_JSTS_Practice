//Template literals
// ` `

// Usecase 1: multi line string

let s1 = `Hello. 
    How are you?
    I'm doing well`;

console.log(s1); 

// Usecase 2: using ' ' in string

let s2 = 'Hello \'Javascript\' ';
console.log(s2);

let s3 = `Hello 'JS'`;
console.log(s3);

// Usecase 3: dynamic strings
let user = "admin";

console.log("Welcome" + user);
console.log(`Welcome ${user}`);


