//Dates

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let anotherDate = new Date(2023, 0, 23); // date (year, month, day) In JS months start from 0
let anotherDate = new Date(2023, 0, 23, 5, 3); // date (year, month, day, hours, minutes)
// console.log(anotherDate.toDateString());
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023");
// console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //Used in quizes gives milisecond
// console.log(myCreatedDate.getTime()); //gives in miliseconds
// console.log(Math.floor(Date.now()/1000)); // gives in seconds

const newDate = new Date();
console.log(newDate.getHours());
console.log(newDate.toLocaleString("default", {
  weekday: "short",
}));
