// Singleton - if creates through constructor then only singleton will create

// Object Literals - declarations of object

// Interview add this symbol in the object
const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  age: 20,
  [mySym]: "myKey1",
  location: "Delhi",
  email: "google@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// How to access elements - two ways to access elements

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // for this type of situation, cuz you can't access with .full name
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "gpt@chatgpt.com"; // for updating the value
// Object.freeze(JsUser); // after putting this, no changes can be performed on the object
JsUser.email = "gpt@microsoft.com";
// console.log(JsUser);

// Adding functions inside object

JsUser.greeting = function() {
    console.log("Hello World!");
}

// this -if you want to access element of same function use this
JsUser.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());