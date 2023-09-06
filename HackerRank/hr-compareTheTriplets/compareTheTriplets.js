// Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  const score = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0]++;
    } else if (a[i] < b[i]) {
      score[1]++;
    }
  }
  return score;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [1, 1]
console.log(compareTriplets([1, 2, 3], [3, 2, 1])); // [1. 1]
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // [2, 1]
