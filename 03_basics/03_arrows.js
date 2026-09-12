const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
  }, // this - it gives current context
};
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this); // gives {} because that it's content here

// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
// }

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username); // inside normal function, this provides a global thing inside object
// };

// const chai = () => {
//   let username = "hitesh";
//   console.log(this); // inside arrow function, this provides an empty object {}
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2; // Implicit Run

const addTwo = (num1, num2) => (num1 + num2); // Implicit Run

console.log(addTwo(3, 4));
