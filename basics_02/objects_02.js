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
const obj3 = Object.assign({}, obj1, obj2); // Adding empty obj just as a syntax a good practice
console.log(obj3);
