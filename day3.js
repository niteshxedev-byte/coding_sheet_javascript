// This script demonstrates a chain of function calls where each function logs its input,
// calls the next function with an incremented value, logs the returned value from that call,
// and finally returns its own input minus one.
// Starting with printHello1(1) the console output will be: 1, 2, 3, 4, 5, 4, 3, 2, 1
// (the final return value 0 is not logged).

// printHello1 logs its argument, calls printHello2 with n+1, logs the return value of printHello2,
// and returns n-1.
function printHello1(n){
   console.log(n); // prints the current value of n (e.g., 1 on the first call)
   console.log(printHello2(n+1)); // prints the value returned by printHello2 (e.g., 1)
   return n-1; // returns n-1 (e.g., 0)
}

// printHello2 behaves the same way, delegating to printHello3.
function printHello2(n){
    console.log(n); // prints the current value of n (e.g., 2 when called from printHello1)
    console.log(printHello3(n+1)); // prints the value returned by printHello3 (e.g., 2)
    return n-1; // returns n-1 (e.g., 1)
}

// printHello3 delegates to printHello4.
function printHello3(n){
    console.log(n); // prints the current value of n (e.g., 3)
    console.log(printHello4(n+1)); // prints the value returned by printHello4 (e.g., 3)
    return n-1; // returns n-1 (e.g., 2)
}

// printHello4 delegates to printHello5.
function printHello4(n){
    console.log(n); // prints the current value of n (e.g., 4)
    console.log(printHello5(n+1)); // prints the value returned by printHello5 (e.g., 4)
    return n-1; // returns n-1 (e.g., 3)
}

// printHello5 only logs its argument and returns n-1.
function printHello5(n){
    console.log(n); // prints the current value of n (e.g., 5)
    return n-1; // returns n-1 (e.g., 4) which is logged by the caller (printHello4)
}

// Starting point: invoke the chain with an initial value of 1.
printHello1(1);
