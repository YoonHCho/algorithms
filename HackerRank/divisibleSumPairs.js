// Link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  const result = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        result.push([i, j]);
      }
    }
  }
  return result.length;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])); // 3 - 3 pairs index #s [1, 4], [2, 3], [4, 6]
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // 5 - 5 pairs index #s [0, 2], [0, 5], [1, 3], [2, 4], [4, 5]
