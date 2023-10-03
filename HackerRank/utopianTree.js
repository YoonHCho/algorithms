// Link: https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
  let currentHeight = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      currentHeight *= 2;
    } else {
      currentHeight += 1;
    }
  }
  return currentHeight;
}

console.log(utopianTree(0)); // 1
console.log(utopianTree(1)); // 2
console.log(utopianTree(4)); // 7
console.log(utopianTree(3)); // 6
