//2. returning functions

// function Returning_Function(){

// }

//3. Parameterized functions

// parameterizedFunction(d,e){
//     var f = d/e;
//     console.log(f)
// }

// parameterizedFunction(120, 10); //functional call
// parameterizedFunction((f = 180), (j = 20));

// //5 Default params

// function defaultFunctionParameter(a, k = 10) {
//   var i = a * k;
//   console.log("Default " + i);
// }

// defaultFunctionParameter;
// //5. Rest ParameterizedFunction()
// function restParameterizedFunction(a, b, c, d, e) {
//   var j = a * b * c * d * e;

//   console.log(j);
// }
// function restParameterizedFunction(a...) {
//   console.log(a);
// }
// restParameterizedFunction(1,2,3,4,5)


//6. Anonymous Function

(function (a, b) {
  //   var a = 10;
  //   var b = 11;
  var c = a + b;
  console.log(c);
})(12, 11);
// 7. Recursive Function

var Factorialrecursive = function (num) {
  //Factorial Problem
  if (num <= 0) {
    return 1;
  } else {
    return num * Factorialrecursive(num - 1);
  }
};
Factorialrecursive(6);
//8.
function functionName() {}
// Anonymous Function
(function () {})();

//Lambda function / Fat Arrow Function /Arrow Function
var lambdaFunction = (a, b) => {
  var c = a + b;
  console.log("Lambda Function " + c);
};
lambdaFunction(28, 12);

//10.

((a, b) => console.log(a + b))(40, 5);

(() => console.log(40 + 5))();

//11. Functional Hoisting

console.log("Function Hoisting" + functionalHoisting());

function functionalHoisting() {
  var a = 10;
  var b = 11;
  var c = a + b;
  return c;
}
// const functionalHoisting = () => {
//   var a = 10;
//   var b = 11;
//   var c = a + b;
//   return c;
// };

//12. Call Back Functions

function callBackFunction(fnSms, fnEmail) {
  console.log("Call Back Functions");

  fnSms();
  fnEmail();
}

callBackFunction(
  () => console.log("SMS"),
  () => console.log("Email")
);
