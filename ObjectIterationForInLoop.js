// Object iteration using for in loop

//Object creation
let user ={
    name:"Tim",
    age:7,
    gender:'f',
    school:'Tony tobin',
    grade:2,
    isActive:true
};

//Object iteration
for(let key in user){
    console.log(key,user[key]);
}

// To get specific values
console.log(user.name);
console.log(user.age);

// Ex 2
let user1 ={
    name:"Tim",
    age:7,
    gender:'f',
    school:'Tony tobin',
    grade:2,
    isActive: true,
    devices: ['iphone','macbook','mouse'],
    address:{
        aptno: 234,
        streetaddress: "123, NY street",
        zip: 98765
    }
};

for(let key in user1){
    console.log(key, user1[key])
};

console.log(user1.devices);
console.log(user1.devices.length);
console.log(user1);