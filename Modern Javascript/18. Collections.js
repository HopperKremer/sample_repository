/*ES6 Maps and Sets
maps enable mapping key to val
sets like arrays but don't encourage duplicates */
//1 Map
var MapCheck = new Map();
//1.1 set for setting key/val pair
console.log(MapCheck.set("firstName", "Arjun"));

//1.2 Get gor getting val of key
console.log(MapCheck.get("fistName"));

//1.3 has
var hasCheck = new Map();
hasCheck.set("1", true);
console.log(hasCheck.has("1")); //true

var hasCheck = new Map();
hasCheck.set("someName", "John");
console.log(hasCheck.has("1"));

//has method
var roles = new Map();
roles.set("r1", "User").set("r2", "Guest").set("r3", "Admin");
console.log(roles.has("r2"));

console.log(roles.get("r2"));

//2 Set
let dupeArr = [1, 1, 4, 5, 4, 4, 2, 1, 5];
console.log(dupeArr);

let arraySet = new Set([1, 1, 4, 5, 4, 4, 2, 1, 5]);
console.log(arraySet);
