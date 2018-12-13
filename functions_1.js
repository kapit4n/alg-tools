// COMMON FUNCTIONS USED IN AN ALGORITHM WITH JAVASCRIPT

// FLAT. Default depth is 1
[1, 2, [3, 4, [5, 6]]].flat(2);

// GROUP BY
var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rev[x[key]] || []).push(x);
    return rv;
  }, {});
}[
  // SORTING
  ("banana", "orange", "apple", "mango")
].sort();
["banana", "orange", "apple", "mango"].reverse();
[1, 4, 2, 7, 0].sort((a, b) => a - b);
[1, 4, 2, 7, 0].sort((a, b) => b - a);

// FILTER
[1, 2, 4, 6].filter(num => num > 2);

// find, gets the first element
var found = [1, 2, 5].find(function(element) {
  return element > 2;
});
// split
var res = str.split(" ", 2); //  get the first two words
// SUBSTRING
var res = str.substring(1, 4);
// FOREACH
[1, 2, 3].forEach(function(element) {
  console.log(element);
});
// WHILE
while (i < 2) {
  accum += i;
  i++;
}
// ASSIGN
const object2 = Object.assign({ c: 3, d: 4 }, object1);
// MAP
[1, 2].map(x => x * 2);
// REDUCE
const reducer = (acum, current) => accum + currentValue;
[1, 2, 3].reduce(reducer);
