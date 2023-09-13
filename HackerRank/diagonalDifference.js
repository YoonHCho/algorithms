// Link: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let firstSum = 0;
  let lastSum = 0;

  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
    lastSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(firstSum - lastSum);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
); // 2
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); // 15
