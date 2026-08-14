// if 
//if else    2 condition
//if else elseif
//switch

/*
if(condition){
    // code to be executed if condition is true
}
else
{
  
}


//
Syntax:
result=condition ? value1 : value2


*/


let age=20;
if(age>=18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

let result=age>=18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log('answer:',result);

// 
/*

AND case->multiply 
OR-> Addition 

AND ->if both true answer istrue else false 
OR-> if any one is true answer is true else false

A        B              Result
false-0   true-1             false 0
0           0                 0
1           0                 0
1        1                 1



OR table 

A        B              Result
false-0   true-1             1
0           0                 0
1           0                 1
1        1                 1
*/

// grade system 90> O   80> <90  -E   >80 60 -A  60-> Fail invalid daa
let marks=85;
if(marks>=90){
    console.log("Grade: O");    
}
else if(marks>=80 && marks<90){
    console.log("Grade: E");
}
else if (marks>=60 && marks<80){
    console.log("Grade: F");
}
else{
    console.log("Invalid marks");
}
// red stop  yello wait green go

let signal="mmm";
if(signal==="red"){
    console.log("Stop");
}
else if(signal=="yellow"){
    console.log("Wait");
}
else if(signal==="green"){
    console.log("Go");
}
else{
    console.log("Invalid signal");
}
  
switch(signal){
      case "yellow":
        console.log("wait");
     case "green":
        console.log("go");
        break;
    case "red":
        console.log("Stop");
    default:
        console.log("invalid data");
   

}
// engineer  application   inventions fridge research time money-> application cocaola  