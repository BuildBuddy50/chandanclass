let a=12 // 
console.log(typeof typeof a);// string
let b=14;// number
let c="12";// string
let d='14';// string
//bodmas
console.log(a+b+c);
console.log(a/b);
// sum of digit  -> 
let x=1234;  // sum of digit 1+2+3+4=10  // 
x=x+2;// 1236   x=1234+2=1236
x+=2; // 1238// false

console.log(a==c); // true  -> value comparison 
console.log(a===c); // false  _> value+dattype comparison ->strict comparison
console.log(a!=d); // true  -> value comparison
console.log(a!==d); // true  -> value+dattype comparison ->strict comparison


// a     a++  ++a       a-- --a
let m=10;
console.log(m++); //10 step : m+1 ->temp(11)    step2= m=temp  11
console.log(m);//11

let n=10;
console.log(n--); //10 step : m-1 ->temp(9)    step2= m=temp  9
console.log(n);//9