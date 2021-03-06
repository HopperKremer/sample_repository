//3.​ Write a JavaScript program to:
//converts a comma-separated values(CSV)string to a 2D array.

const csvToArr = (csvStr) => {
  return csvStr.split(",");
};

console.log(csvToArr("sdf,sf,wer,yu,sdf,uyy"));

// 5.​ Write a JavaScript program to convert an array of objects
// to a comma-separated values (CSV) string that contains only the columns specified.
let employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];
console.log(employees[2].age);
const objArrToCsv = (arr, key) => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
    console.log(arr[i].key);
  }
  return newArr.join(",");
};

console.log(objArrToCsv(employees, "firstName"));

// 21.​ Write a JavaScript program to get every nth element in a given array.
const nthElems = (arr, step) => {
  newArr = [];
  for (let i = step - 1; i < arr.length; i += step) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(nthElems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// 26.​ Write a JavaScript program that will
// return true if the string is y/yes or false ifthe string is n/no.

const truthFinder = (str) => {
  return str == "y" || str == "yes"
    ? true
    : str == "n" || str == "no"
    ? false
    : null;
};
console.log(truthFinder("y"));
console.log(truthFinder("n"));
console.log(truthFinder("yes"));
console.log(truthFinder("lkjl"));

//28.​ Write a JavaScript program to measure the time taken by a function to execute.

//not precise enough
const runtime = (myFn) => {
  var start = new Date().getTime();
  myFn("y");

  return new Date().getTime() - start;
};

console.log(runtime(truthFinder));
console.log("Time is: " + new Date().getTime());

//34.​ Write a JavaScript program to get a random integer in the specified range.

const randy = (lo, hi) => {
  num = Math.random() * hi;
  if (num < lo) {
    randy(lo, hi);
  }
  return num;
};

console.log(randy(2, 8));

// 38.​ Write a JavaScript program to pad a string on both sides with
// the specifiedcharacter, if it's shorter than the specified length.
//#Source https://bit.ly/2neWfJ2

const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
console.log(pad("cat", 8));
console.log(pad(String(42), 6, "0"));
console.log(pad("foobar", 30, "X"));

// 47.​ Write a JavaScript program to perform a deep comparison
// between two values to determine if they are equivalent.

const compareTwo = (a, b) => a === b;

console.log(compareTwo("hi", "hi"));
console.log(compareTwo("0", 0));
console.log(compareTwo(12, 12));

// 50.​ Write a JavaScript program to convert an integer
// to a suffixed string, addingam or pm based on its value.

const militaryToCommonTime = (hours) => {
  if (hours < 12) {
    return hours + "am";
  } else {
    return hours - 12 + "pm";
  }
};
console.log(militaryToCommonTime(23));

// 53.​ Write a JavaScript program to Initialize a two dimension array
// of given widthand height and value.

const new2dArr = (rows, cols) => {
  arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([]);
    for (let j = 0; j < cols; j++) {
      arr[i].push(0);
    }
  }
  return arr;
};

console.log(new2dArr(3, 4));
