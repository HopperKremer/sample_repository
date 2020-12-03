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

//     [X, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// sum += arr1[0][0]*arr2[0][0]
// sum += arr1[0][1]*arr2[1][0]
// sum += arr1[0][2]*arr2[2][0]
//     [1, X, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// sum += arr1[0][0]*arr2[0][1]
// sum += arr1[0][1]*arr2[1][1]
// sum += arr1[0][2]*arr2[2][1]
//     [1, 2, X],
//     [4, 5, 6],
//     [7, 8, 9]
// sum += arr1[0][0]*arr2[0][2]
// sum += arr1[0][1]*arr2[1][2]
// sum += arr1[0][2]*arr2[2][2]
//next row
//     [1, 2, 3],
//     [X, 5, 6],
//     [7, 8, 9],
// sum += arr1[1][0]*arr2[0][0]
// sum += arr1[1][1]*arr2[1][0]
// sum += arr1[1][2]*arr2[2][0]
//     [1, 2, 3],
//     [4, X, 6],
//     [7, 8, 9],
// sum += arr1[1][0]*arr2[0][1]
// sum += arr1[1][1]*arr2[1][1]
// sum += arr1[1][2]*arr2[2][1]

// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]

// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]

// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]
// sum += arr1[][]*arr2[][]

// let arr1 = [
//     [X, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// sum += arr1[0][0]*arr2[0][0]
// sum += arr1[0][1]*arr2[1][0]
// sum += arr1[0][2]*arr2[2][0]
// let arr1 = [
//     [1, X, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// sum += arr1[0][0]*arr2[0][1]
// sum += arr1[0][1]*arr2[1][1]
// sum += arr1[0][2]*arr2[2][1]
// let arr1 = [
//     [1, 2, X],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//...
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
    let hi = 0;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        let sum = 0;
        for (let k = 0; k < arr1[0].length; k++) {
          sum += arr1[i][k] * arr2[k][j];
          hi = hi < k ? k : hi;
        }
        arr[i].push(sum);
      }
    }
    console.log(hi);
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
let arr3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let arr4 = [
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [22, 23, 24, 25],
];
//     [X, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// sum += arr1[0][0]*arr2[0][0]
// sum += arr1[0][1]*arr2[1][0]
// sum += arr1[0][2]*arr2[2][0]
//     [1, X, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// sum += arr1[0][0]*arr2[0][1]
// sum += arr1[0][1]*arr2[1][1]
// sum += arr1[0][2]*arr2[2][1]

//     [1, 2, 3],
//     [X, 5, 6],
//     [7, 8, 9],
// sum += arr1[1][0]*arr2[0][0]
// sum += arr1[1][1]*arr2[1][0]
// sum += arr1[1][2]*arr2[2][0]
//     [1, 2, 3],
//     [4, X, 6],
//     [7, 8, 9],
// sum += arr1[1][0]*arr2[0][1]
// sum += arr1[1][1]*arr2[1][1]
// sum += arr1[1][2]*arr2[2][1]
let arr5 = [
  [1, 2],
  [4, 5],
  [7, 8],
];
let arr6 = [
  [13, 14, 15],
  [17, 18, 19],
];
let arr7 = [
  [13, 14, 15],
  [17, 18, 19],
];
let arr8 = [
  [1, 2],
  [4, 5],
  [7, 8],
];

console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);
console.log(mMult(arr1, arr2));
console.log(mMult(arr3, arr4));

console.log(mMult(arr5, arr6));
console.log(mMult(arr7, arr8));
