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





//Arrays
//Single Dimensional

var single_dimension = [1,2,3,4,5]

//Multi Dimensional

var multi_dimension = [[0,1],[1,3]]
// 00 - 0, 01 - 1, 10, 11 - 3

//1. Matrix Addition
//[
    // 1  2        5   6
    // 3  4        7   8
//]

var array1 = [[1,2],[3,4]]
var array1 = [[1,2],[3,4]]
var sum = [[],[]]

for(var i=0; i<2; i++){

    for(var j = 0; j < 2; j++) {
        
        sum[i][j] = array1[i][j] + array2[i][j]
    }
}
console.log(sum)

//12    56
//34    78

//00



var array1 = [[1,2],[3,4]]
var array1 = [[1,2],[3,4]]
var sum = [[],[]]

for(var i=0; i<2; i++){

    for(var j = 0; j < 2; j++) {
        
        var sumArray = array1[i] + array2[j]
        console.log(sumArray)
    }
}