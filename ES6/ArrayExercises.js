// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

//26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3
function findPair(arr, tgt) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j == i) {
        continue;
      } else if (arr[i] + arr[j] == tgt) {
        console.log(arr[i]);
        console.log(arr[j]);
        console.log(tgt);
        console.log("Elements " + i + " and " + j);
        return;
      }
    }
  }
}
numbers = [10, 20, 10, 40, 50, 60, 70];
target = 50;
const findMax = (acc, val) => {
  if (val > acc) {
    acc = val;
  }
  return acc;
};
findPair(numbers, target);

console.log(numbers.reduce(findMax));
