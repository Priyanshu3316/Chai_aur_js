const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // Push - takes the whole array as an element [1,2,3[4,5,6]]
// const allHeroes = marvel_heros.concat(dc_heros); // Concates - returns new array add each [1,2,3,4,5,6]

// console.log(allHeroes);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Spread
const all_new_heroes = [...marvel_heros, ...dc_heros]; // most preferably used
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // all inside arrays into 1 array, arg - array depth
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // Checks weather we have this array or not
console.log(Array.from("Hitesh")); // Converts Hitesh into H i t e s h

console.log(Array.from({ name: "Hitesh" })); // Intresting - we have to define either we are converting keys into array or elements, otherwise it will return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // A set of elements to include in the new array object.
