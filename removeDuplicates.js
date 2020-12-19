/*Remove duplicates of an array and return an array of only unique elements
=====================================
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];*/

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

const remove = (arr) => {
    let newArr = []
    for (let i = 0; i< arr.length ; i++) {
        if (arr[i] in newArr){
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}


const remove2 = (arr) => {
    let newArr = []
    for (let i = 0; i< arr.length ; i++) {


        if (newArr.includes(arr[i])){
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
const remove3 = (arr) => {
    let newArr = []
    for (let i in arr) {
        if (i in newArr){
            continue;
        }
        newArr.push(i);
    }
    return newArr;
}
console.log(remove(array))
console.log(remove2(array))
console.log(remove3(array))


const f1 = (pfn1) => {
    console.log("hi 1");
    pfn1();
}

const f2 = (pfn2) => {
    console.log("hi 2");
    pfn2();
}

const f3 = () => {
    console.log("hi 3");
}

f1( f2( f3() )   );
// f1( f3()   );


