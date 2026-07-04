//Object Parsing

let user ={
    name:"Tim",
    age:7,
    gender:'f',
    school:'Tony tobin',
    grade:2,
    isActive:true
};

console.log(typeof(user));

//JS Object to JSON conversion - Serialization
console.log(typeof(user));
let userJSON = JSON.stringify(user, null, 2);
console.log(userJSON);
console.log(typeof(userJSON));


//JSON to JS Object - Deserialization
let userObj = JSON.parse(userJSON);
console.log(userObj);
console.log(typeof(userObj));

console.log(user.name === userObj.name);
console.log(user.age === userObj.age);
console.log(user.devices === userObj.devices);



