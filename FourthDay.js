// ---------------------------------------------------Day 4: Loops------------------------------------------------
// Tasks/Activities:
// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop. 

for (let index = 1; index <=10 ; index++) {
   console.log(index);
    
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
let num = 5;
for (let i = 1; i<= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}
// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 10 using for loop: ${sum}`);

// while()

let sum1 =0;
let j =1;
while(j<= 10){
    sum1 += j;
    j++;
}
console.log(`Sum of numbers from 1 to 10 using while loop: ${sum1}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let  sum2= 0;
let k = 10;
while(k >= 1 ){
    sum2 += k;
    k--;
}
console.log(`Sum of numbers from 10 to 1 using while loop: ${sum2}`);

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5; // Example number for factorial calculation
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= number);

console.log(`Factorial of ${number} is: ${factorial}`);


// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
// (ignore color)

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}


// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//  Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

