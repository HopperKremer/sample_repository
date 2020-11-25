console.log("10");
var a = 10;

//Vars
//1 declaration
var a;

//2. initialization
a = 10;

//3. Definition
var b = 11;

//Data Types

//1. Integer, Float, Double, Bool, Str
var a = true;

// 2. Object, Array

//Scope of Variables

//1, Global Scope

var global_variable = "Global String";

console.log(global_variable);

function print() {
  var local_variable = "local string";
  console.log(global_variable);
  console.log(local_variable);
}
print();
//console.log(local_variable);

//2. Block Scope Vars

// Block
{
}

//2.1 Let
{
  {
    let block_scope = "block scope variable";
    console.log(block_scope);
  }
  console.log(block_scope);
}

console.log(block_scope);

//Hoisting (only works with var) (functional hoisting too)
if (a == 10) {
  var some_variable = 10;
  console.log(some_variable);
}
// 2.2 Const
//You can only initialize once
//you can re initialize value
