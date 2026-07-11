//String Interpolation

const name = "John";
const age = 30;

// console.log(`Hello my name is {name} and my age is {age}`);
// String interpolation - we can put methods also on variables

const gameName = new String("hiteshhc");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4); // 4th index value console nhi hogi, last se shuru nhi krta
console.log(newString);

const anotherString = gameName.slice(-8, 4); // -8 h last se shuru krega
console.log(anotherString);

const newStringOne = "  hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
console.log(url.includes("sundar"));
