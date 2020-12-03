//1. Concat
//Sy
//Array.concat(val1,val2)

var alpha = ["a", "b"];

var numeric = [1, 2, 3];

var alphanumeric = alpha.concat(numeric);

console.log("Conc " + alphanumeric);

//2. Every Method
//Array.every(callback[, thisObj])
//Callback function to test for each element
//it only returns boolean
/*Notes
    1. For Callback 
    2. */

function isBigEnough(element) {
  return element >= 20;
}
var passed = [12, 10, 33].every(isBigEnough);

console.log("Tested value");
//For index pos
function isBigEnoughIndex(element, index) {
  return index < 2;
}
var everyResultIndex = [10, 11].every(isBigEnoughIndex);
console.log("Tested val for index: " + everyResultIndex);

/*******Filter Method IMPORTANT
 * 
 * Syntax: Array.filter(callback())
 * 
Element  */
function isBigEnoughFilter(element) {
  return element >= 20;
}
var filterResult = [12, 5, 8, 33, 23, 44].filter(isBigEnoughFilter);
console.log("Test val: " + filterResult);

//Index Position
function isBigEnoughFilterIndex(element, index) {
  return index > 2;
}

var filterResultIndex = [12, 5, 8, 33, 23, 44].filter(isBigEnoughFilterIndex);
console.log("Test val: " + filterResultIndex);

/*4 For Each Method
    Syntax:
    Array.forEach(callback)
*/
var nums = new Array(12, 13, 14, 15);
nums.forEach(function (element, index) {
  console.log("For Each Method Element: " + element);
  console.log("For Each Method Index: " + index);
});

//5.Reverse

var reversedArray = nums.reverse(); //reverse elements

console.log("printing reversed Array" + reversedArray);

//6 index of

//Array.indexOf(callback)

var indexofArray = [23, 3, 33, 56, 34].indexOf(3);

console.log("Index of Method: " + indexofArray);

/*7 Join
    Array.join(sep)
    */
var joinArray1 = new Array("First", "Second", "Third");

var stringJoin = joinArray1.join(" + ");

console.log("" + stringJoin);

//8 split

var splitString = "I, Want, to";
var splitWordArray = splitString.split(",");
console.log("Split method: " + splitWordArray);

/*9. Last Index of

*/
var indexOfLastElement = [].lastIndexOf(44);
console.log("Last index of method:" + indexOfLastElement);

/*Map
 */
let arrayForMap = [1, 2, 3, 4];

let newArrayForMap = arrayForMap.map((element) => element * 2);

console.log("Map Method: " + newArrayForMap);

//11. pop
//Array.pop()

const student = ["Will", "Jon", "Kris", "Mike"];
const newStudents = student.pop();
console.log("Pop " + newStudents);
console.log("Student arr now = " + student);

//12 Push
//Array.push()

let newArrayToPush = student.push("Larry");

console.log("Pushsd Method: " + newArrayToPush);
console.log(student);

/*14 Reduce
 */
var total = [0, 1, 2, 3, 4, 5, 6].reduce(function (a, b) {
  return a * b;
});
console.log("Reduce Method: " + total);

//15 reduce right

var reduceRightNumber = [1, 2, 1].reduceRight((a, b) => a * b);
console.log("Reduce Right :" + reduceRightNumber);

//16. Shift Method
//Syntax: Array.shift()
var shiftNum = [];
//Removes First'
const newShiftNum = shiftNum.shift();
console.log("Shift:" + shiftNum);

//17 slice
//arr.slice(numOfElements)

var sliceItems = ["cup", "house", "spoon", "plate"];
var newSliceItems = sliceItems.slice(2);
console.log("Slice: " + newSliceItems);
// can give start and end
var newSliceItems2 = sliceItems.slice(2, 3);
console.log("Slice method with start/end " + newSliceItems2);

//18 splice
//Arr.splice(startIndex, deleteCount[i1, i2])

var splicedItems = [1, 2, 3, 4, 5];
//Delete2 items starting with 1 index
var deletedSplicedItems = splicedItems.splice(1, 2);
console.log("Splice method: " + splicedItems);

//19 Unshift Method
//Arr.unshift(newElements added to start)

var unshiftArr = [0, 0.5, 1, 2, 3, 4, 5];
var newUnshiftArr = unshiftArr.unshift(22, 33);
console.log("Unshift Method: " + unshiftArr);

//20 Some
const isBigEnough2 = (element) => element >= 10;

var someRetval = [2, 5, 8, 9, 4].some(isBigEnough2);

console.log("Some " + someRetval);
//21 Sort

var sortArr = new Array("orange", "mango", "banana", "sugar");
var sortedArr = sortArr.sort();
console.log("Sort " + sortedArr);

//22 To String

var toStringArr = new Array(1, 2, 3, 4);

var stringedArr = toStringArr.toString();
console.log("StringMethod: " + typeof stringedArr);

//23. Find (only returns one elem)

var findNum = [2, 3, 4, 1, 5];
var oddNum = findNum.find((element) => element % 2 == 1);
console.log("Find Method: " + oddNum);
