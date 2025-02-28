const { remove } = require("@jridgewell/set-array");

let x = 10;
const student= {name: "ram", age: 18, marks: 96};

student.city = "vizag";
delete student.age;
console.log(student);