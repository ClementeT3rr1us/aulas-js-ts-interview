// What are pure and impure fuctions in js?

// In JavaScript, the difference is mainly about side effects and whether the function always produces the same result for the same input.

// Pure function

// A pure function:

// Given the same input, always returns the same output.
// Does not modify anything outside itself (no side effects).

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Impure function

// An impure function can produce different results for the same input or modify something outside itself.

// For example:

let total = 10;

function addToTotal(value) {
  total += value;
  return total;
}

// Another common example:

function getRandomNumber() {
  return Math.random();
}

console.log(getRandomNumber());