// function expression or anonymus function
let abc = function () {
  console.log("Hello World");
};
console.log(abc);
abc();

// write function with const
const abcd = function () {
  console.log("Hello World");
};
console.log(abcd);
abcd();

let add = function (a, b) {
  return a + b;
};
console.log(add);
console.log(add(4, 6));

// arrow function
const arrowfun = () => {
  console.log("I am arrow function");
};
arrowfun();

const addarrow = (a,b) => a+b;
console.log(addarrow(5,6));

