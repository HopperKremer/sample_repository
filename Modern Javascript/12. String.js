//Str constructor
var str = new String("This is the string");
console.log("str con is:" + str.constructor);

//1. length

var strLength = String("Hello world");
console.log("Length method:" + strLength.length);

//2. string.proto
//allows you to add props and methods to any obj

function employee(id, name) {
  this.id = id;
  this.name = name;
}

var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
employee.prototype.salary = 4000;

console.log("Employee id:" + emp.email);

//Methods of the str
//1. CharAt
//Syntax: string.charAt(index)
var charAtString = new String("lkjlkjlk");
console.log("strchar" + str.charAt(0));

//2charCodeAt(index)
var charCodeAtString = new String("dis a str");
console.log("str.charCodeAt(0) is: " + charCodeAtString.charCodeAt(0));

//3 String.concat(str1, str2, ...)
var concatStr1 = "dis str";

var concatStr2 = "dis str two";
var concatStr3 = concatStr1.concat(concatStr2);

console.log("concatd: " + concatStr3);

//4 IndexOf
//string.indexOf(searchVal, [fromIndex])
//searchval
//fromIndex = location within calling string to start search from (int 0 - length)

var indexOfString = new String("This is index of string");
var indexPosition = indexOfString.indexOf("i", 10);

console.log(" index of nth i" + indexPosition);

//5. LastIndexOf
//Syntax: string.lastIndexOf(searchValue,[])

var lastIndexOfStr = "This is the last index of string";
var indexPositionLast = lastIndexOfStr.lastIndexOf("last", 5);
console.log("Index Pos from last " + indexPositionLast);

//6 localeCompare
//str.localeCompare(param)
//0 str matches 100%
//1 no match
var localCompareString = new String("This is a  beautiful string");
//localCompareString2
var indexPosition = localCompareString.localeCompare("is");
console.log("Locale compare first: " + indexPosition);

//7 Match
//"/(a-zA-Z"

const sentence = "How DoyOu";

const regex = /[a-z]/g;

const lowerCase = sentence.match(regex);

console.log(lowerCase);

//8. Replace
var replaceString = /apples/gi;
var changingString = "Apples are round, and apples are juicy";
var newString = changingString.replace(replaceString, "Oranges");

console.log(newString);

//9 search
//string.search

var re = /apples/gi;
var searchString = "Apples are round, and apples are juicy";
if (searchString.search(re) == -1) {
  console.log("Does not contain Apples");
} else {
  console.log("contains apples");
}

//10 slice

var sliceString = "Apples are round, and apples are juicy";
var slicedString = sliceString.slice(3, -2);
console.log(slicedString);

//11. Split
//string.split =

var splitString = "Apples are round, and apples are juicy";
var splittedString = splitString.split("", 3);

//12 Substr
//string.substring(indexA, indexB)
var subString = "Apples are round, and apples are juicy";
console.log("(1,2): " + subString.substring(1, 2));
console.log("(0,10): " + subString.substring(0, 10));

//13. toLower
var lowerCaseString = "Apples are round, and apples are juicy";
console.log(lowerCaseString.toLocaleLowerCase());
console.log(lowerCaseString.toLowerCase);

console.log(lowerCaseString.toLocaleUpperCase);
console.log(lowerCaseString.toUpperCase);

//15. toString()

//16. Trim
let sent = "    scotchy scotch  ";
//trim sentence
let trimmedSentence = sent.trim();
console.log(trimmedSentence);

let password = "  p@ssw0rd  ";
console.log(password.trim());
//17. includes
const includeString = "are you available for the meeting";
const searchWord = "meeting";
const ispresent = includeString.includes(searchWord);
console.log(ispresent);

/*18. Endswith
str.ensWith(matchstr, pos)*/
var endsWithString = "Hello World!";
console.log(endsWithString.endsWith("Hello"));
console.log(endsWithString.endsWith("Hello", 4));

//19
//string.repeat(count)


//template literals
var namey = "Brendan"
console.log("Hello" + namey)
console.log("Hello" ${namey} how are you")

function fn(){
    return "hllo"
}
console.log(`Message: ${fn()} !!`)

//20 fromcodepoint

console.log(String.fromCodePoint())