// number
// string
// boolean
// BigInt
// null
// undefined

//number - size: 8 bytes
let n = 1000;
console.log(typeof(n));

//string - size: 2 bytes per character
let str = "Saran";
console.log(typeof(str));

//boolean - size: 1 byte
let flag = true;
console.log(typeof(flag));

//BigInt - size: no defined size
let bignumber = 1234567n;
console.log(typeof(bignumber));

//null - size: anywhere from 0 to 8 bytes
let name = null;
console.log(typeof(name)); //object - jS bug

//undefined  - size: anywhere from 0 to 8 bytes
let animal;
console.log(typeof(animal));
