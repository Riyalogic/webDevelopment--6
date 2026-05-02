let test = "this is global test variable";

function classA() {
  console.log("ClassA", test);
}
function classB() {
  console.log("ClassB", test);
}
function classC() {
  let test2 = "this is local variable";
  console.log("ClassC", test);
  console.log("ClassC", test2);
}
function classD() {
    let x =20;
  console.log("ClassD", test);
  console.log(x);
  {
    
    let v = 10;
    console.log(v);
    console.log(x);
  }
  console.log(v);
  console.log(x);
}
function classE() {
  console.log("ClassE", test);
}
function classF() {
  console.log("ClassF", test);
}
function classG() {
  console.log("ClassG", test);
}

classA();
classB();
classC();
classD();
classE();
classF()
classG();

// var a = 10;
// console.log(a);
// console.log(b);
// var b = 20;
// console.log(a);
// console.log(b);
