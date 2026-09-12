// Arrays
// While copying they create shallow copies - with references
// const myArr = [1, 2, 3, 4, 5, true, "John"];
const myArr = [1, 2, 3, 4, 5];
// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[2]);

//Array methods

// myArr.push(6); // adds given value in array
// myArr.push(7);
// myArr.pop(); // no need of argument, just removes the last value

// myArr.unshift(9); // Adds value in start of Array - generally not used, modify original array
// myArr.shift(); // Removes value from start of Array, no argument required

// console.log(myArr.includes(9)); // Boolean value - tells value exists or not
// console.log(myArr.indexOf(2)); // Boolean value - tells value exists or not
// console.log(myArr);

// Join - changes array into string and input - [1,2] output 1,2

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

// Slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // does not include last index

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // changes original array and provides deleted item
console.log(myn2);
console.log("C ", myArr);
