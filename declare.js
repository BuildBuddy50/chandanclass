console.log('hello');
// Feature	var	let	const
// Scope	Function	Block {}	Block {}
// Reassign	✅ Yes	✅ Yes	❌ No
// Redeclare in same scope	✅ Yes	❌ No	❌ No
// Hoisted	✅ Yes	✅, but TDZ	✅, but TDZ
// Must initialize	❌ No	❌ No	✅ Yes
// Recommended	❌ Avoid	✅	⭐ Prefer


let a;// declare -> asign
const c=20; //constant
var b=3; // declare
const man="male";
const women="female";
console.log(man);//10
console.log(a);

// const
// let or var

//Never use var in your code. Use let and const instead. why?
//file - globa 
// {}-> block
a=20;// value change possible for let 
//let a=30;// redeclare  not possible for let  and const 
var b=30; // redeclare possible for var
console.log(a);
 {

let m=12;
console.log("print global varibale inside block ",a);

 console.log(m);
 }

 
/*

Crieteria        Let       const     var
Scope            Block      Block     everywhere
Reassign(value)  Yes        No        Yes
Redeclare        No         No        Yes
Hoisted          Yes        Yes       Yes
Must initialize  No         Yes       No
Recommended      ✅         ⭐         ❌


*/
