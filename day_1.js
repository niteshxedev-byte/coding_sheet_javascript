const prompt = require('prompt-sync')({ sigint: true });
// you have to install npm install prompt - sync
// for taking inputs from termial 


// cheak number is positive negitive or zero
function checkNumberIsPositiveNegativeOrZero(n) {
    if (n === undefined || n === null || n === '') {
        console.log(`enter the value`);
        return;
    }

    if (n > 0) {
        console.log(`Number:${n} is positive `)
    }
    else if (n < 0) {
        console.log(`Number:${n} is negitive `)

    }
    else console.log(`Number:${n} is zero `)
}

checkNumberIsPositiveNegativeOrZero(Number(prompt("enter n :")))



// find maximum of two numbers 

function findMaxOfTwo(num1, num2) {
    if (num1 === undefined || num1 === null || num1 === '') {
        console.log(`enter the value paramenter 1`);
        return;
    }

    if (num2 === undefined || num2 === null || num2 === '') {
        console.log(`enter the value paramenter 2`);
        return;
    }

    if (num1 > num2)
    { console.log(`${num1} is greater than ${num2}`) }
    else if (num1 < num2)
    { console.log(`${num2} is greater than ${num1}`) }
    else console.log("both are equal")
}

findMaxOfTwo(Number(prompt("enter num1 :")), Number(prompt("enter num2 :")))





// find maximum in three numbers 


function findMaxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(`The maximum is ${num1}`)
    }
    else if (num2 >= num1 && num2 >= num3) {
        console.log(`The maximum is ${num2}`)
    }
    else {
        console.log(`The maximum is ${num3}`)
    }
}
findMaxOfThree(Number(prompt("enter num1 :")), Number(prompt("enter num2 :")), Number(prompt("enter num3 ")))



// cheak num is odd or even 


function cheakOddOrEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
cheakOddOrEven(Number(prompt("enter num :")));


// cheak if year is leapyear or not

function cheakLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 === 0)) {
        console.log("leap year")
    }
    else {
        console.log(`not a leap year`)
    }
}
cheakLeapYear(Number(prompt("enter year :")));


// cheak char is vowel or consonant

function charVowelOrConsonant(chr) {
    let smallChar = chr.toLowerCase()
    if (smallChar === "a" || smallChar === "e" || smallChar === "i" || smallChar === "o" || smallChar === "u") {
        console.log("vowel")
    }
    else {
        console.log("consonant")
    }
}
charVowelOrConsonant((prompt("enter char :")));


// cheak if person can vote or not 


function canVoteOrNot(age) {
    if (age <= 0 || age >= 100) {

        console.log("re enter the age")
        return
    }
   
    if (age >= 18) {
        console.log("you can vote ")
    }
    else{
        console.log("you cannot vote ")
    }
}

canVoteOrNot(Number(prompt("enter age :")))

// cheak if number is divisible by 5 and 7

function checkDivisibleBy5And7(num) {
    if (num % 5 === 0 && num % 7 == 0) {
        console.log(`${num} is divisible by both 5 and 7`)
    }
    else {

        console.log(`Number ${num} is NOT divisible by both 5 and 7`)
    }
}

checkDivisibleBy5And7(Number(prompt("enter number : ")))


// make simple calculator 


function simpleCalculator(num1, num2, op) {
     op = op.toLowerCase();
    if (op === "add") {
        console.log(`Add ${num1} and ${num2} = ${num1+num2}`)
    }
    else if (op === "sub") {
        console.log(`subtract ${num1} and ${num2} = ${num1 - num2}`)
    }
   else if (op === "mul") {
        console.log(`multiplay ${num1} and ${num2} = ${num1 * num2}`)
    }
   else if (op === "div") {
        console.log(`Divide ${num1} and ${num2} = ${num1 / num2}`)
    }
    else {
        console.log("Error: Invalid operation. Please use add, sub, mul, or div.");
    }
}
// Test case
simpleCalculator(10, 5, "MUL"); // Output: Multiply 10 and 5 = 50

function print1toNLoop(n) {
    for (let i = 1; i <= n; i++){
        console.log(i)
    }
}

print1toNLoop(5);


function print1toNLoop(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

print1toNLoop(5);