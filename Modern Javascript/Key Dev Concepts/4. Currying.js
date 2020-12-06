const multiply = (a, b) => a * b;

//curried
const curriedMultiply = (a) => (b) => a * b;

console.log(curriedMultiply(5)(8));
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiply(4));
