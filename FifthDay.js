// ---------------------------------------------Day 5: Functions--------------------------------------------------------
// Tasks/Activities:
// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function evenOdd(num){
    if (num % 2==0){
        console.log(num +" Number is Even.");
    }
    else {
        console.log(num +" Number is Odd");
    }
}
 evenOdd(2);
 evenOdd(3);

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num){

    return  num * num;

}
let result = square(3);
console.log("Square of the number is : "+ result );

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxOfTwo(num1,num2){
    if (num1>num2){
        console.log(num1 + " is greater than " + num2);
    }
    else{
        console.log(num2 + " is greater than " + num1);
    }
}

maxOfTwo(9,6);

// Task 4: Write a function expression to concatenate two strings and return the result.

const  StringConcat = function(str1, str2){

        return str1 +" "+ str2;

}

console.log(StringConcat("hellow","world"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const SumOfTwo = (a,b) =>a+b;

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containChar = (str, char) =>{
    for(let i=0; i < str.length; i++){
        if (str[i] === char){
            return true;
        }  
    } 
    return false;
} 

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 

const product = (p1, p2=2)=>{

    return p1 * p2;
}

let result2 = product(5,5);
console.log(result2);


//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greetingMsg = (name, age=18)=>{

    return `Hello !! ${name}, you are ${age} years old. Welcome!`
}

let result3 = greetingMsg("juhi")
console.log(result3);




// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.









// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.











// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result. 2.
// Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result. 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.