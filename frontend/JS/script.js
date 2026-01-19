// alert("hello from external js");
//variales always starts ith letters or _ or $
//vaiales cannot contain wwhitespace
//keywords cannot be used as var name
//variables are case sensitive
// var a;
// var a=5;
// let a;
// let a=5;
// const a=5;  not for const cant be declared must assign value

// var
// declaration and initilization
// var a;
// var a=6;

// window mah add hunxa
// functional scope
// redclare garna milxa
// var a=6;
// var a=6;
// const value cant be changed

// {
//     var a= 5;
// }
// console.log(a);
// var is a functional scope
//let is a block scope
// function abc(){
//     if (true){
//         var num=34;
//     }
//     console.log(num);
// }
// abc();

// console.log(num);
// var num=45;
// // temporary deadzone area access garna namilne

// hoisting

// primitive=> Directly copy garna Milne 
// number,string,boolean,null,undefined,symbol,bigInt
// let num1 = 23;
// let num2 = num1;
// num2 = num2 + 2;

//undefined
// let num;

// bigInt add a n at last
// let num = 298435623798562453798n;

//immutable unique value
// let u1 = Symbol("hello");
// let v1 = Symbol("hello");

//quirks bbugs of js hich we use

// type coerction : data type is automatically converted
// let num1 = 5;
// let num2 = 7;

// arithmetic operator(+,-,*,/,*,%,**)
// assignment operator(=,+=,-=,)
// compaision operator(<,>,<=,>=,==,!=,===,!==)
// logical operator(&&,||,!)

// unary operator (++,--,)increment and decrement
// ternary operator (conditional)
// ()?"" : ""

// falsy: aflse,0,null,undefined,document.all,""
// if(-1){
//   //code
// }

// num1=-4;
// if(num1 >0){
//     if(num1%2==0 && num1!=0 ){
//     console.log("its  positive even number");
//     }
//     else{
//         console.log("its positivvve 0dd");
//     }
// }
// else if(num1 < 0){
//     if(num1%2==0 && num1!=0 ){
//     console.log("its  negative even number");
//     }
//     else{
//         console.log("its negative odd");
//     }
// }    

// if(num1>0 && num1%2==0)
// let day=2;
// switch(day)
// {
//     case 1:
//     console.log("sunday");
//     break;
//     case 2:
//     console.log("Monday");
//     break;
//     case 3:
//     console.log("Default");
//     break;
// }


// non-primitive=> directly copy gardainam (){}{}
// array,Object,function




// first class function
// function xyz(a){
//     console.log("hello");
// }
// function xyz(a){
//     a();
// }
// xyz(abc);

// function sum(a,b){
//     return a+b;
// }
// let val =sum(1,8);
// console.log(val);

// higher order function : takes function as argument
// or function that returns other function

// pure and impure function

// let val = 45;

// function xyz(){
//     console.log(val);
// }
// xyz();

// function abc(){
//     console.log(++val);
// }
// abc();

// closures : functions that returns another function and can access the return value as 

// function abc(){
//     let a = 45;
//     function xyz(){
//         console.log(++a);
//     }
//     return xyz;
// }
// let fn= abc();
// fn();

// IIFE(Immediately invoaked function expression)

// (function abc(){
//     console.log("abc")
// })();
// xd