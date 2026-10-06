/*
  JavaScript Learning File
  Purpose: This single file combines the main JavaScript concepts covered in the project so beginners can study them in one place.
  Learning use:
  - Variables and data types
  - Operators and conditions
  - Loops
  - Arrays and array methods
  - Strings
  - Functions and arrow functions
  - Objects
  - Classes and inheritance
  - Modules and exports
*/

// 1) Variables and basic data types
let numberValue = 5;
let decimalValue = 1343.65;
let nameValue = "Ranhul Setty";
let isActive = true;
let emptyValue = null;
let notDefined;

console.log("Number:", numberValue, typeof numberValue);
console.log("Decimal:", decimalValue, typeof decimalValue);
console.log("String:", nameValue, typeof nameValue);
console.log("Boolean:", isActive, typeof isActive);
console.log("Null:", emptyValue, typeof emptyValue);
console.log("Undefined:", notDefined, typeof notDefined);

// 2) Operators and boolean logic
let sum = numberValue + 10;
console.log("Sum:", sum);
console.log("Not of isActive:", !isActive);

// 3) Conditional statements
const flag = !true;
if (!flag) {
  console.log("Condition satisfied");
} else {
  console.log("Condition not satisfied");
}

// 4) Loops
console.log("For loop from 1 to 10:");
for (let k = 1; k <= 10; k++) {
  if (k % 2 === 0 || k % 5 === 0) {
    console.log(k);
    if (k === 10) break;
  }
}

let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

do {
  console.log("Do-while loop executes at least once");
} while (false);

// 5) Arrays and array methods
let marks = [20, 30, 40, 50, 60, 70];
console.log("Original marks:", marks);
marks.push(65);
console.log("After push:", marks);
marks.pop();
console.log("After pop:", marks);
marks.unshift(19);
console.log("After unshift:", marks);
marks.shift();
console.log("After shift:", marks);
console.log("Index of 70:", marks.indexOf(70));
console.log("Includes 120:", marks.includes(120));

const totalMarks = marks.reduce((sumValue, mark) => sumValue + mark, 0);
console.log("Total marks:", totalMarks);

const scores = [12, 13, 14, 16];
const evenScores = scores.filter((score) => score % 2 === 0);
const multipliedScores = evenScores.map((score) => score * 3);
console.log("Even scores:", evenScores);
console.log("Multiplied even scores:", multipliedScores);
console.log("Combined result:", multipliedScores.reduce((sumValue, value) => sumValue + value, 0));

// 6) Strings
let day = "Tuesday ";
console.log("String length:", day.length);
console.log("Slice:", day.slice(0, 4));
console.log("Character at index 1:", day[1]);
console.log("Split by 's':", day.split("s"));

let newQuote = day + "is Funday day";
console.log("New quote:", newQuote);
console.log("First 'day' index:", newQuote.indexOf("day"));

let dayCount = 0;
let index = newQuote.indexOf("day");
while (index !== -1) {
  dayCount++;
  index = newQuote.indexOf("day", index + 1);
}
console.log("Total 'day' occurrences:", dayCount);

// 7) Functions
function add(a, b) {
  return a + b;
}
console.log("Function add:", add(2, 3));

const multiply = function (a, b) {
  return a * b;
};
console.log("Function expression multiply:", multiply(2, 3));

const multiplyArrow = (a, b) => a * b;
console.log("Arrow function multiply:", multiplyArrow(2, 3));

const sayHello = () => "Hello World";
console.log("Arrow function sayHello:", sayHello());

// 8) Objects
let person = {
  firstName: "Tim",
  lastName: "Joe",
  age: 24,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Object fullName:", person.fullName());
console.log("Dot notation:", person.lastName);
console.log("Bracket notation:", person["lastName"]);
person.firstName = "Tim Dane";
person.gender = "male";
console.log("Updated person object:", person);
delete person.gender;
console.log("After delete:", person);
console.log("Has gender property:", "gender" in person);

for (let key in person) {
  console.log("Object key/value:", key, person[key]);
}

// 9) Classes and inheritance
class PersonClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 25;
  }

  get location() {
    return "Canada";
  }

  fullName() {
    return this.firstName + this.lastName;
  }
}

class Pet extends PersonClass {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  get location() {
    return "BlueCross";
  }
}

const personObj = new PersonClass("Chris", "Edward");
const petObj = new Pet("Sam", "San");
console.log("Class full name:", personObj.fullName());
console.log("Class location:", personObj.location);
console.log("Pet full name:", petObj.fullName());
console.log("Pet location:", petObj.location);

// 10) Module pattern
// This helps us expose functions or classes so other files can import them.
// In Node.js, common use is: module.exports = { ... }
if (typeof module !== "undefined") {
  module.exports = {
    add,
    multiplyArrow,
    person,
    PersonClass,
    Pet,
    sayHello,
  };
}

console.log("\nThis file combines almost all basic JavaScript learning concepts in one place.");
console.log("Use it to understand variables, loops, arrays, strings, functions, objects, classes, and modules.");
