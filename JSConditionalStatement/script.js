let n = 5;
if (n > 0) {
  console.log("positive integer");
} else {
  console.log("negative integer");
}

let m = 20;
if (m > 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote ");
}

let p = 10;
if (p % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let marks = 75;
if (marks > 90) {
  console.log("A");
}
if (marks > 75) {
  console.log("B");
}
if (marks > 50) {
  console.log("C");
} else {
  console.log("Fail");
}

let username = "abcd";
let pass = "12345";
if (username === "abcde" && pass === "12345") {
  console.log("login success");
} else {
  console.log("login Failed");
}
username === "abcde" && pass === "12345"
  ? console.log("login success")
  : console.log("login Failed");

let a = 5;
b = 1;
console.log(a > 2 && b < 3);

let data;
let name1 = "riya";
data = name1 || "N/A";
// if (name1) {
//   data = name1;
// } else {
//   data = "NA";
// }
console.log(data);

let Data;
let Name = "anshul";
Data = Name && "N/A";
console.log(Data);

let x = 2;
console.log(x > 10 && y < 5);

for(let i =0;i<5;i++){
    if(i ===3){
        continue;
    }
    console.log(i); 
}

for(let j =0;j<5;j++){
    if(j ===3){
        break;
    }
    console.log(j); 
}

let choice = 1;
switch(choice){
    case 1:{
        console.log("Tea");
        break;
    }
    case 2:{
        console.log("Coffee");
        break;
    }
    case 3:{
        console.log("Lassi");
        break;
    }
    default:{
        console.log("pani");
    }
}
