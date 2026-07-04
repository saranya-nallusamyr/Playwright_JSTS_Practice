//Array iteration

// Normal - for loop
let arr = ['apple','berry','cherry','dates','fig'];
for (let i =0;i<=arr.length-1;i++){
    console.log(arr[i]);
}

// for of loop - iterate the values
for (let e of arr){
    console.log(e);
}

//for in loop - iterate the index
for(let i in arr){
    console.log(i);
    console.log(arr[i]);
}

//Reverse
for(let j=arr.length-1;j>=0;j--){
    console.log(arr[j]);
}

console.log("---------------------------------------");
// for of - rev
let ar = ['apple','berry','cherry','dates','fig'];
for(let e of ar ){
    let count = ar.length-ar.indexOf(e)-1;
    console.log(ar[count]);
}

counter = ar.length -1;
for(let e in ar){
    e = counter;
    console.log(ar[counter]);
    counter--;
}