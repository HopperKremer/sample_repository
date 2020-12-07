var person = {
  firstname: "Tom",
  lastname: "Hanks",
};

var foo = "bar";
var anonFunc = function () {
  console.log("Anonymous Function");
  return 10;
};

//Object Methods
var baz = { foo, anonFunc };
console.log(baz.foo);
console.log(baz.anonFunc());

var foo = "bar";
var a = "some";
var baz = { foo: a };

console.log(baz.foo);

//Object Constructor
//syntax
//var obj_name = new Object()
//obj_name.property = val
//objName["key"] = val

var myCar = new Object();
//New key/prop caller
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1987;
// myCar = {
//     make:"Ford"
// }

console.log(myCar["make"]); //access obj prop/key
console.log(myCar.year);

function car() {
  this.make = "Ford";
  this.model = "F123";
}

var obj = new car();
console.log(obj.make);

// //Methods of objs
//     //1 obj.create()

var roles = {
  type: "Admin",
  displayType: function () {
    console.log(this.type);
  },
};

console.log(roles.displayType());
console.log(roles.displayType());

/*Using Obj.create method makes your objs have prototype
Create new */

var super_role = Object.create(roles);

console.log(super_role.displayType());
super_role.type = "SomeAdmin";
console.log(super_role.type);
console.log(roles.type);

// var some_roles

//2 Obj.assign
// Obj.assign(target, ...sources)
var det = { name: "Tom", ID: "E1001" };
var det1 = { make: "Ford" };
var copy = Object.assign(det1, det);
console.log(copy.make);

for (let val in copy) {
  console.log(copy[val]);
}

var o1 = { a: 10 };
var o2 = { b: 20 };
var o3 = { c: 30 };
var assignObj = Object.assign(o1, o2, o3);
console.log(assignObj);

//Delete operator
var deletedObj = new Object();

deletedObj.a = 5;
deletedObj.b = 12;
console.log(deletedObj);
delete deletedObj.a;
console.log(deletedObj);

var compare1 = { name: "Tom" };
var compare2 = compare1;
//{name: "Tom"}
console.log(compare1 === compare2);

//Two distinct objs are never equal, even if they have same props
//Diff mem address

//Obj destructuring
var objDestruct = { namey: "john", id: 13 };
var { namey, id } = objDestruct;

console.log(namey);
console.log(id);

//Arr Destruct

var arrDestruct = [1, 2, 3, 4, 5];
var destructArr = ([x, y, u, z, a] = arrayDestruct);
for (elem in destructArr) {
  console.log(elem);
}
