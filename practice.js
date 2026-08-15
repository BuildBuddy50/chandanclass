let num=456;// input  -Q
let count=0;// output   -A
let sum=0;// 15
let mul=1;// 120
let rev=0;// 654
let largest=0;// 6
let smallest=9;
/*
1.length of digit 
2.Sum of digit 
3.Multi of digit 
4.Reverse numer 
5.largest of digit
6.Smallest num
7.Pallindrome   num == rev num
8.Amstrong   153 ->    1+125+27= 153 => amstrong



*/
//mod 768 % 10 -> 8    768/10 -76.8
//76%10  6              76/10   -8
// 7%10  ->7            7/10=0
//1.count of digits


while(num>0)
{
count++;// count=count+1;
num=Math.floor(num/10); 


}

console.log(count);//3
num=456;
while(num>0)
{


let digit=num%10;
sum=sum+digit;
mul=mul*digit;
num=Math.floor(num/10); 


}

console.log("Sum of digit is: ",sum);
console.log("multiply of digit is :",mul);

num=121928;//  itr1:  6    rev  =   rev*10+rem=6              num=45
        // itre    5     6*10+5=65                         num=4
        //itr      4     65*10+4= 654                       num 0
while(num>0)
{


let rem=num%10;
rev=rev*10+rem;
num=Math.floor(num/10); 


}
console.log("reverse of num is :",rev);
num=39458;// largest=0;
while(num>0)
{


let rem=num%10;

if(rem>largest)
  largest=rem;



num=Math.floor(num/10); 


}
console.log("largest numb",largest);

// smallest ,prime,pallendrome  ,factorial , fabinaci,amstrong  ->  0 1 1 2 3 5 8..  40...  
// 121  ->  989  4544  9889

//1,3,5,7   -> 2  AP
//16 8 4 2 1 ->GP
// ******

