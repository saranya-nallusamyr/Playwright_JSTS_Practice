//Incremental/Decremental Operators:        

//1) What will be the output of the following program?
		let i = 11;
		
		i = i++ + ++i;
		
		console.log(i); //24

//2) Guess the output of the following program?
		let a=11, b=22, c;		
		c = a + b + a++ + b++ + ++a + ++b; //11 + 22+ 11+22+13+24
		console.log("a="+a); //13
		console.log("b="+b); //24
		console.log("c="+c); //103


//3) What will be the output of the below program?
let i=0;
let j = i++ - --i + ++i - i--; 
// 0-0+1-1
console.log(i);//0
console.log(j);//0


//4) Is the below program written correctly?
let b = true;
b++;
console.log(b);//2

//5) What will be the output of the below program?
 let i=1, j=2, k=3;
let m = i-- - j-- - k--;
//1-2-3
console.log("i="+i); //0
console.log("j="+j);//1
console.log("k="+k);//2
console.log("m="+m);//-4

//6) What will be the output of the following program?
let a=1, b=2; 
console.log(--b - ++a + ++b - --a);
//1-2+2-1 = 0

//7) What will be the value of i, j and k in the below program?
let i=19, j=29, k=9;
let m = i-- - j-- - k--;
// 19-29-9
console.log("i="+i);//18
console.log("j="+j);//28
console.log("k="+k);//8

//8) What is wrong with the below program? Why it is showing a compilation error?
let i = 11;
let j = --(i++);   //error - inc/dec doesnt work with values     

//9) Guess the value of p in the below program?
let m = 0, n = 0;
let p = --m * --n * n-- * m--;
// -1*-1*-1*-1
console.log(p); //1

//10) What will be the output of the following program?
let a=1;
a = a++ + ++a * --a - a--; 
//1+3*2-2
console.log(a); //5


//11) What will be the outcome of the below program?
let a = 11++;
console.log(a); //error

//12) What will be the outcome of the below program?

let d = 1.5, D = 2.5;
console.log(d++ + ++D); //1.5 +3.5=5
