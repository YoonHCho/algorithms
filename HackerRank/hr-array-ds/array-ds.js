// Link: https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
  // Write your code here
  let reversed = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversed.push(a[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([4, 1, 7]));
