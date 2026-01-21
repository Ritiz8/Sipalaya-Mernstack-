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

// Array : array is a collection of different type of data
// let marks =[23, 45, 87, 34, 53, "a", true, null, undefined]
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers[5])
// numbers[5]=653;
// properties
// numbers.length;
// console.log(numbers.length);

// // method
// //at

// //push and pop push add elements in array and pop removes the last element from array
// numbers.push(132);

// shift and unshift add and remove element from beginning of the array
// numbers.unshift(165,785,37);

// slice : gives new array from the main array

//splice  add or remove elements from middler of the array
// numbers.splice(3,1,3446,3,876);

// numbers.sort(function(a,b){
//     return a-b;
// });

// numbers.forEach((value,index, array)=>{
//     console.log(value);
// })

// let results = numbers.map(function (value,index){
//         console.log(value, index);
//     return value * 2;
// })


// let results = numbers.filter(function(value,index){
//     if (value % 2 == 0){
//         return value;
//     }
// });
// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce(function (prev, curr){
//     return prev + curr;
// })
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let results = numbers.filter(function(value,index){
//     if (value > 5){
//         return value;
//     }
// });

// let values= [2,4,6,8];
// let results = values.reduce(function(prev,curr){
//     return prev + curr;
// })

// let result = values.find((value,index)=>{
//    return  value > 5
// })
    
// let result = values.every((value) =>{
//     return value < 10
//     ;
// })

// let numbers = [1,2,3,4,5,6,7,12,4,547,6,4,52];
// let newArr= [...numbers]

// copying arrary
// let arr1=[1,3,5,7]
// let arr2=[2,4,6,8]
// let arr3=[...arr1,...arr2]  // ... spread operator

//array destructuring :
// let arr1 =[1,3,5,7,9]
// let [a,b,c,d,e]=arr1;


const user = {
  Name: "John",
  addrerss:{
    city: "ktm",
    location: {
        lat:89,
        lon:65
    }
  },
  age: 50,
  skills:["java", "python", "c"],
  eyeColor: "blue",
  sayHello: function(){
    console.log("hello");
  }
}

const {Name, age}= user;

let arr=[1,35,6,89];
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for (const value of arr) {   // for array
//     console.log(value)
// }
// for (const key in user) {     //for oject
//     console.log(user[key]);
    
// }

// let keys = Object.keys(user);
// for (const values of keys) {
//     console.log(user[values])
// }

// let u1={...user}
// let newoj=JSON.parse(JSON.stringify(user)) //deepclone

