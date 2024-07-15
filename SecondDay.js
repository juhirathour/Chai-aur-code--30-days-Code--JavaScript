// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
     let num1 = 10;
     let num2 = 20;
     let sum = num1 + num2;
     console.log(sum);

// Task 2: Write a program to subtract two numbers and log the result to the console.

    sub = num2 - num1;
    console.log(sub);

// Task 3: Write a program to multiply two numbers and log the result to the console. 

     mul = num1 * num2 ;
     comsole.log(mul);

// Task 4: Write a program to divide two numbers and log the result to the console.

    div = num2 / num1;
    console.log(div);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
     
    rem = num2 % num1;
    console.log(rem);

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
    let num = 10;
    num += num;
    console.log(num);


// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
    let num3 = 40;
    num3 -= num3;
    console.log(num3);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
    let x1 = 10;
    let y1 = 20;
    console.log(x1 > y1);  
    console.log(x1 < y1);  

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
    let a = 20;
    let b = 30;
    console.log(a >= b);
    console.log(a <= b);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
    let num4 = 10;
    let num5 = '10';
    console.log(num4 == num5);
    console.log(num4 === num5);

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
    if(num1>num2 && num3>num2) {
    console.log("num2 is smaller than both");
}


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

    if(num2===num3 || num1===num3) {
    console.log("They are Equal");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

    if(num1!==num2) {
    console.log("true");
}

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const num6 = -3;
console.log(num6 >= 0 ? "The number is positive." : "The number is negative.");

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
    // Arithmetic Operations Script
const c = 10;
const d = 5;

console.log("Addition:", c + d);
console.log("Subtraction:", c - d);
console.log("Multiplication:", c * d);
console.log("Division:", c / d);
console.log("Remainder:", c % d);


// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions
// using logical operators, logging the results.

// Comparison and Logical Operators Script
const x = 15;
const y = 10;

console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);

console.log("x > 10 && x < 20:", x > 10 && x < 20);
console.log("x < 10 || x > 5:", x < 10 || x > 5);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Ternary Operator Script
const number = -7;
console.log(number >= 0 ? "The number is positive." : "The number is negative.");
