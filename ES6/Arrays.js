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