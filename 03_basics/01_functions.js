function sayHi() {
  //   console.log("Hi");
}
sayHi();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2); // answer is undefined
// }
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  //   return number1 + number2;
  return result; // after result function will not do anything
}
const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

// Another Example
// function LoginUserMessage(username) {
//   return `${username} just logged in`;
// }
// LoginUserMessage("hitesh"); //  you defined and called the function, but you never instructed JavaScript to output the result to the terminal
// console.log(LoginUserMessage("Hitesh"));

console.log(LoginUserMessage()); //the output is `undefined just logged in`

// To tackle undefined problem
function LoginUserMessage(username) {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// Rest Operator

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(20, 30, 40, 600));

// Another Case

const user = {
  username: "hitesh",
  price: 199,
};
function handle0bject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}
handle0bject(user);

const newArray = [200, 400, 600, 1000];
function secondArray(getArray) {
  return getArray[1];
}
console.log(secondArray(newArray));
