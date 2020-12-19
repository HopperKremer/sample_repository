

// 1. Find given number is Prime or not
const isPrime = (num) => {
    for (let i = num -1; i>1 ; i--) {
        if (num%i == 0) {
            //return "false, divisible by" + i;
            return false;
        }
    }
    return true;
}

console.log(isPrime(1761))
console.log(isPrime(16))

// 2. Find Prime between 1 to 100
const PrimeFinder = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(PrimeFinder(100));
// 3. Find fibinoci series The Fibonacci Sequence is the series of numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding up the two numbers before it
//returns array of fib nums
const fib = (num) => {
    let arr = [0,1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i] + arr[i+1]);
    }
    return arr;
}
console.log(fib(10))

// const fibRecursive = (num) => {
//     let arr = [0,1];

//     fibRecursive(num)
//     for (let i = 0; i < num; i++) {
//         arr.push(arr[i] + arr[i+1]);
//     }
//     return arr;
// }
//Returns nth number
const fibRecursive = (n) => {
    if (n<0) 
    {
        print("Incorrect input");
    } 
    else if (n==0) {
        return 0;
    }
    else if( n==1) {
            return 1
        }
    else {
        return fibRecursive(n-1)+fibRecursive(n-2);
    }
} 
  console.log(fibRecursive(10))



// 4. Print below pattrens

// 	*
// 	**
// 	***
// 	****
// 	*****
// 	****
// 	***
// 	**
// 	*

for (let i = 0; i < 5; i++) {
    let str = '';
    for (let j = 0; j < i; j++){
        str+='*'
    }
    console.log(str)
}

// 5. accept a number and check for palindrome
const palindrome = (n) => {
    if (n<0) {
        n*=-1;
    }
    n2 = n
    .toString()
        .split('')
        .reverse()
        .join('')
    if (n == n2) {
        return true;
    }
    return false;
} 
  console.log(palindrome(7655))
  console.log(palindrome(1223221))

// 6.Find the sum of all elements of a given array?
const sum = (arr) => {
    total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}
var arr231 = [1, 2, 5, 10, 20];
console.log(sum(arr231));

// 7)Find Duplicate Characters in a String
const findDuplicates = (str) => {
    let arr = str.split('');
    let newArr = []
    let tracker = []
    for (let i = 0; i< arr.length ; i++) {
        if (tracker.includes(arr[i])){
            newArr.push(arr[i]);
        }
        tracker.push(arr[i]);
    }
    return newArr;
}
console.log(findDuplicates('hjgjkhguy'));

// 8)Find first non-repeated character in a String
const findFirst = (str) => {
    let arr = str.split('');
    let newArr = []
    let tracker = []
    for (let i = 0; i< arr.length ; i++) {
       // if (arr[i])
    }
    return newArr;
}
//console.log(findFirst('hjgjkhguy')); 

// 9)Reverse a String(trying using without reverse method in String Builder)
const reverseString = (str) => {
    let arr = str.split('');
    let newArr = []
    // for (let i = 0; i< arr.length ; i++) {
    //     newArr.unshift(arr[i]);
    // }
    //I guess I prefer push() over unshift()
    for (let i = arr.length; i > 0 ; i--) {
        newArr.push(arr[i]);
    }
    return newArr.join('');
}
console.log(reverseString('hjgjkhguy'));

// 10)Compute floor of a division and modules.Apply Overloading for four different primitive datatypes 

// 11)Check if a string contains substring(String and substring are input) 


// 12)Extract Min and Max of two numbers(int,long,float and double) 

// 13)Write a Programm to sort an Array using loop(Not using Arrays or Collections classes) 

// 14)Write a Programm to reverse a Array(using Loops) 
const reverseArray = (arr) => {
    let newArr = []
    // for (let i = 0; i< arr.length ; i++) {
    //     newArr.unshift(arr[i]);
    // }
    //I guess I prefer push() over unshift()
    for (let i = arr.length - 1; i > 0 ; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([0,  1,  1,  2,  3, 5,  8, 13, 21, 34 ]));
// 15)Create a interface Arithmetic which contains a method signature int divisor_sum(int n).
//You need to write a class called MyCalculator which implements the interface. 

//   divisorSum function just takes an integer as input and return the sum of all its divisors. For example divisors of 6 are 1, 2, 3 and 6, so divisor_sum should return 12 

//   Input : 6   

//   Output: I implemented: Arithmetic  

//             12 

// const reverseString = (str) => {
//     let arr = str.split('');
//     let newArr = []
//     // for (let i = 0; i< arr.length ; i++) {
//     //     newArr.unshift(arr[i]);
//     // }
//     //I guess I prefer push() over unshift()
//     for (let i = arr.length; i > 0 ; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr.join('');
// }
// console.log(reverseString('hjgjkhguy'));