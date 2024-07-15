// ----------------------------Day 1: Variables and Data Types------------------------------------------------
// Tasks/Activities:
// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 12;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
 let str = "hello world";
 console.log(str);


// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const bool = true;
console.log(bool);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const num1 = 12;
const str1= "variable Type";
const bool1 = false;
const obj = {
    name : "30 day challenge",
    duartion: 30,
    launchedby: "chai aur code",

}
const arr = [1, 2, 3, 4, 5];

console.log(typeof num1); // number
console.log(typeof str1); // string
console.log(typeof bool1); // boolean
console.log(typeof obj);   // object
console.log(typeof arr);   // object (arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let val1 = 10;
console.log(val1);
val1 = "JS";
console.log(val1);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

const val2 = 10;
console.log(val2);
try {
    val2 = "JS"; // This will throw an error
} catch (error) {
    console.log("Error:", error.message);
}

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the
// console.
const num2 = 42;
const str2 = "Hello";
const bool2 = true;
const obj2 = { key: "value" };
const arr2 = [1, 2, 3];

console.log(num2, typeof num2);
console.log(str2, typeof str2);
console.log(bool2, typeof bool2);
console.log(obj2, typeof obj2);
console.log(arr2, typeof arr2);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let variableLet = "initial value";
console.log("let before reassignment:", variableLet);
variableLet = "new value";
console.log("let after reassignment:", variableLet);

const variableConst = "initial value";
console.log("const before reassignment:", variableConst);
try {
    variableConst = "new value"; // This will throw an error
} catch (error) {
    console.log("Error:", error.message);
}


