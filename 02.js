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

