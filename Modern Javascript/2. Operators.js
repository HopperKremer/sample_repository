//1
var a = 10;
var b = "10";
var c = a + b;
//left operand right operand
//2 Relational operators

//[<, >, <=, ==, ===]
if (a === b) {
  console.log("True");
} else {
  console.log("False");
}

//4. Bitwise Operators
// [&, |, ^, <<, >>, <<<]

var d = 10;
var e = 11;

var f = d % e;
//d = 10
//1     0       1      0
//2^3   2^2     2^1     2^0
//8             2
//1010

console.log(f);

//Left Shift Right Shift
//<<



//3. nested if condition
if (a == 11) {
    if(b == 11) {
        console.log("True Nested IF")
    }
}
//4. Switch
switch (a) {
    case 10:
        console.log("True Switch")
        break;
    case 11:
        console.log()
    default:
        console.log("Switch Default")
}

//Loops
//2. For
//for(initialization;condidtion/expression;increment/decrement)
for (var i=0; i<5; i++) {
    console.log(i)
}
//2. For in
var obj = {
    fname: "Arjun",
    lname: "SN",
}
for(i in obj) {
    console.log(obj[i]);
}
//For of
var array1 = [1,2,3,4]

for (j of array1) {
    console.log(j)
}
// 4.While Loop
var k = 1
while(k<5) {
    console.log(k)
    k++
}
//5. Do while
var l = 1
do{
    console.log(l)
    l++
}
while(l<5)