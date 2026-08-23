// JavaScript Execution Context
// Whenever you give something to js, 1 chiz bnegi hi - that is Global Execution Context
// and that Global Execution Context ko this variable mein refer kr denge
// this ke ander GEC ko rakh dia jata h

// JS is a single threaded, everything is work in a process

// Execution Contexts
// Global Execution Context
// Function Execution Context
// Eval Execution Context

// Program is divided in two phases: Memory Creation Phase and Execution Phase

// How a program runs

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Steps 
// 1. Global Execution and this is created  
// 2. Memory Phase - naming all variables setting there values to undefined
// Val 1 -> undefined
// Val 2 -> undefined
// add num- defination
// result 1 -> undefined
// result 2 -> undefined

// 3. Execution Phase

// add NuM --> new varlable environment + Execution Thread