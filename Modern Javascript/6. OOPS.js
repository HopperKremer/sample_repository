//1. Classes
//class Reserved Keyword and ClassName => Class Definition
class ES6 {
  //No variables outside functions in ES6/modern js
  add = () => {
    var c = a + b;
    console.log(c);
  };
  subtract() {
    var c = a - b;
    console.log(c);
  }
  //constructor
  // ES6(){
  //     var a = 10
  //     var b
  // }
}

//Object

var obj1 = new ES6((a = 10), (b = 12));
obj1.add(20, 10);
var obj2 = new ES6((a = 13), (b = 18));
obj2.add(11, 28);

//OOPS Concepts
//1. Inheritance
//1. Single Inh
class A {
  addition(a, b) {
    var c = a + b;
    console.log(c);
  }
}

class B extends A {}

var obj3 = new B();
obj3.addition(20, 30);

//2. multilevel

class C {
  multiplication(a, b) {
    var c = a * b;
    console.log(c);
  }
}
class D extends C {}
class E extends D {}
var obj4 = new E();
obj4.multiplication(10, 20);

//3. Hierarchical

class F {
  division(a, b) {
    var c = a / b;
    console.log(c);
  }
}

class G extends F {}
class H extends F {}

var obj5 = new G();
obj5.division(100, 10);
var obj6 = new H();
obj6.division(400, 8);

//super

//5. overloading
class overloadingClass{
    multiplication(a,b){
        var c = a*b
        console.log("1st fn " + c)
    }
    multiplication(c,d){
        var d = c*d
        console.log("2nd fn " + d);
    }
}

var obj8 = new overloadingClass()
obj8.multiplication(10,20)