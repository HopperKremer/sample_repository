//memoization of caching

function addTo80(n) {
  console.log("longTime");
  return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

let cache = {
  5: 85,
};

function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("longTime");
    return (cache[n] = n + 80);
  }
}
console.log(memoizeAddTo80(5));
console.log(memoizeAddTo80(10));
console.log(memoizeAddTo80(6));
