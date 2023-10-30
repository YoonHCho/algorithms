// Link: https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  const result = [];

  for (let i = 0; i < p.length; i++) {
    // since the values in the array will start with 1 (i + 1) and add + 1 after because it's 1 based index
    const index = p.indexOf(i + 1) + 1;
    const valueOfIndex = p.indexOf(index) + 1;
    result.push(valueOfIndex);
  }

  return result;
}

console.log(permutationEquation([2, 3, 1])); // [2, 3, 1]
console.log(permutationEquation([4, 3, 5, 1, 2])); // [1, 3, 5, 4, 2]
console.log(permutationEquation([5, 2, 1, 3, 4])); // [4, 2, 5, 1, 3]
