// Immediately Invoked Function Expressions (IIFE)
// due to global scope pollution, we have to remove that so we use IIFE

(function chai() {
  console.log("DB CONNECTED");
})();

// (() => {
//   console.log("DB CONNECTED TWO");
// })();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
