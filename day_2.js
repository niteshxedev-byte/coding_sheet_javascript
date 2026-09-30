// Print even and odd numbers 1 to N

function printEvenOrOddNumbers(n, op) {
    op = op.toLowerCase()
    for (let i = 1; i <= n; i++) {
        if (op === "even") {
            if (i % 2 == 0) {
                console.log(i)
            }
        }
        else if (op === "odd") {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
        else {
            console.log("invalid operation passed ")
        }

    }
}
printEvenOrOddNumbers(10, "Even")


// Print multiplication table

function printTables(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}
printTables(5)

// Calculate sum of first N natural numbers
function sumOfNnaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sumOfNnaturalNumbers(5);

// calculate factorial 

function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial = factorial * i;
    }
    console.log(factorial)
}
calculateFactorial(5);



function printSumEvenOrOddNumbers(n, op) {
    op = op.toLowerCase()
    sumEven = 0
    sumOdd = 0
    for (let i = 1; i <= n; i++) {
        if (op === "even") {
            if (i % 2 == 0) {
                sumEven = sumEven + i
            }
        }
        else if (op === "odd") {
            if (i % 2 != 0) {
                sumOdd = sumOdd + i
            }
        }
        else {
            console.log("invalid operation passed ")
        }


    }
    console.log(sumEven, sumOdd)
}
printSumEvenOrOddNumbers(10, "Even")



function printNumbersUsingWhile(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++
    }
}
printNumbersUsingWhile(5)


// Check if number is positive even, positive odd, etc.

function numIsPostiveEvenPositiveOdd(n) {
    if (n % 2 == 0) {
        if (n > 0) {
            console.log(`${n} is positive even`)
        }
        if (n < 0) {
            console.log(`${n} is negitve even`)
        }
    }
    else if (n % 2 != 0) {
        if (n > 0) {
            console.log(`${n} is positive odd`)
        }
        if (n < 0) {
            console.log(`${n} is negitve odd`)
        }
    }
}

numIsPostiveEvenPositiveOdd(3)

function print(x) {
    console.log(x)
}
print("hello world")