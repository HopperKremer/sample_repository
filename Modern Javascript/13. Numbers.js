//1. sepsilon//
//interval betweem
var interval = Number.EPSILON;
console.log(interval);

//2. Number.MAX_SAFE_INTEGER

var maxSafeInt = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInt);

//3.Number.MAX_VALUE
//
var maxPositiveNum = Number.MAX_VALUE;
console.log("val " + maxPositiveNum);

//4. Number.MIN_VALUE
var minVal = Number.MIN_VALUE;
console.log("min = " + minVal);

//Num methods
//1. inNaN
var res = Number.isNaN(10);
var res1 = Number.isNaN("Some Str");
console.log(res);
console.log(res1);

//2. Number.isFinite
var finiteNum = Number.isFinite(1 / 3);
console.log(finiteNum);

//3. isInteger(
console.log(Number.isInteger(0));

console.log(Number.isInteger(0.1));

console.log(Number.isInteger(true));

//4. parseFloat
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat(10.23e-4));

//5. parseInt
console.log(Number.parseInt("10"));
console.log(Number.parseInt(10.23e-4));

//6. toExponential
var exponentialNum = 1225.3;
console.log(exponentialNum.toExponential());

//7. toFixed
var fixedNum = 177.234;
console.log(fixedNum.toFixed());
console.log(fixedNum.toFixed(1));

console.log(fixedNum.toFixed(2));

//8 toLocaleString
var numToString = 177.234;
console.log(numToString.toLocaleString());
//9, toPrecision
console.log();
var fixedNum = 177.234;
console.log(fixedNum.toPrecision());
console.log(fixedNum.toPrecision(1));

console.log(fixedNum.toPrecision(2));
