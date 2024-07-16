// ----------------------------------------Day 3: Control Structures------------------------------------------------
// Tasks/Activities:

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
let a = 5;
console.log(`Enter a number: ${a}`);

if (a > 0) {
    console.log("a is greater than 0");
} else if (a < 0) {
    console.log("a is smaller than 0");
} else {
    console.log("a is equal to 0");
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 0; // Change this number as per your wish
console.log(`Enter your age: ${age}`);

if (age >= 18) {
    console.log("Person is eligible to vote");
} else if (age > 0 && age < 18) {
    console.log("Person is not eligible to vote");
} else {
    console.log("Invalid age");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 20 , num2 = 30, num3 = 40;

if (num1 > num2){
    if (num1 > num3){
        console.log(`num1 is the largest of three numbers`);
    }else {
        console.log(`num3 is the largest of the three numbers`);
    }
}else{
    if (num2 > num3){
        console.log(`num2 is the largest of the three numbers`);
    }else {
        console.log(`num3 is the largest of the three numbers`);
    }
}


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
let day = 9;
switch(day){
    case 1 :
    console.log("Sunday");
    break;
    case 2 :
        console.log("Monday");
        break;
        case 3 :
            console.log("Tuesday");
            break;
            case 4 :
                console.log("Wednesday");
                break;
                case 5 :
                    console.log("Thursday");
                    break;
                    case 6 :
                        console.log("Friday");
                        break;
                        case 7 :
                            console.log("Saturday");
                            break;
                            default:
                                console.log("Invalid Day");

}


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

let score = 65;
switch(true){
    case (score >=90 ) :
    console.log("Grade : A");
    break;
    case (score >= 80 ) :
        console.log("Grade : B");
        break;
        case (score >= 70 ) :
            console.log("Grade : C");
            break;
            case (score >= 60 ) :
                console.log("Grade : D");
                break;
            default:
                console.log("Grade : F");

}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 3; // Example number
console.log(number % 2 === 0 ? "The number is even." : "The number is odd.");


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2023; // Example year

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("The year is a leap year.");
} else {
    console.log("The year is not a leap year.");
}


// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.