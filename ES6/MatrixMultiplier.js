// sum += arr1[0][0]*arr2[0][0]
// sum += arr1[0][1]*arr2[1][0]
// sum += arr1[0][2]*arr2[2][0]

// sum += arr1[0][0]*arr2[0][1]
// sum += arr1[0][1]*arr2[1][1]
// sum += arr1[0][2]*arr2[2][1]
// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]

mMult = function (arr1, arr2) {
  if (arr1.length != arr2[0].length || arr1[0].length != arr2.length) {
    return console.log("arrays not compatible");
  } else {
    console.log("we good");

    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
      arr.push([]);
    }
    //use mod % to avoid nested loops?
    for (let i = 0; i < arr1.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr1[0].length; j++) {
        sum += arr1[i][j] * arr2[j][i];
        //for (let k)
      }
      arr[i].push([sum]);
    }
    return arr;
  }
};

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let arr2 = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];
// var arr1 = (arr2 = [
//   [1, 2],
//   [3, 4],
// ]);
// let arr1 = [
//   [1, 2],
//   [3, 4],
// ];
// let arr2 = [
//   [5, 6],
//   [7, 8],
// ];

console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);

console.log(mMult(arr1, arr2));
