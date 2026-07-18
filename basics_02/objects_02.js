// const tinderUser = new Object () // Singleton Object
const tinderUser = {}; // Non - singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

obj1 = { 1: "A", 2: "B" };
obj2 = { 3: "C", 4: "D" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2); // Adding empty obj just as a syntax a good practice
const obj3 = { ...obj1, ...obj2 }; // Adding empty obj just as a syntax a good practice
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // can access all keys of tinderUser object
console.log(Object.values(tinderUser)); // can access all values of tinderUser Values
console.log(Object.entries(tinderUser)); // give each entry in different array
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
