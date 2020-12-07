//Static meth belongs to class and members/meths
//but not to instance of class

class Triple {
  static triple(n = 1) {
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static usingTriple() {
    return super.triple() * super.triple();
  }
}
//Triple instance
var obj = new Triple();
//console.log(obj.triple());
console.log(Triple.triple());
//Bigger Triple instance
//var obj1 = new BiggerTriple();
//console.log(obj1.usingTriple());
