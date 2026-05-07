"use strict";

// Hoisting
// let a;
let b;
let c;

a = 10;
console.log(a);
console.log(b);
console.log(c);

b =15;
console.log(a);
console.log(b);
console.log(c);

c = 20;
console.log(a);
console.log(b);
console.log(c);

// Hoisting with function
abc();
function abc(){
    console.log("i am a function");
}

// String
let str = "this is String"
console.log(str.charAt(5));
console.log(str.toUpperCase);
console.log(str.toLowerCase);

let a =3.14
console.log(a);
console.log(typeof a);
let d = a.toString();
console.log(d);

let  i = 3.14547895222354;
console.log(i.toFixed(3));

let fullName = "riya jogi";












