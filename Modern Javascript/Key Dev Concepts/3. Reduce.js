const arr1 = [1, 2, 3, 4];
//reduce(callbackfunc)
function myFunc(total, num) {
  return total - num;
}
console.log(arr1.reduce(myFunc));
