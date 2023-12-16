// Link: https://www.hackerrank.com/challenges/an-interesting-game-1/problem?h_r=internal-search

function gamingArray(arr) {
  let count = 0;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      count++;
      max = arr[i];
    }
  }

  return count % 2 === 0 ? "ANDY" : "BOB";
}

console.log(gamingArray([5, 2, 6, 3, 4])); // ANDY
console.log(gamingArray([3, 1])); // BOB
console.log(gamingArray([1, 3, 5, 7, 9])); // BOB
console.log(gamingArray([7, 4, 6, 5, 9])); // ANDY
