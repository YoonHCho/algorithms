/* Finding the greater sum with the least possible values in an array compared to the rest of the values in the array.
EX. [4, 1, 3, 2, 5] => [4, 5] because sum of [4, 5] = 9 is greater than [1, 2, 3] = 6
*/

const greaterSumArray = arr => {
  const sorted = arr.sort((a, b) => b - a);
  let totalSum = 0;
  for (let i = 0; i < sorted.length; i++) {
    totalSum += sorted[i];
  }

  let subsetSum = 0;
  let sortedArr = [];
  for (let i = 0; i < sorted.length; i++) {
    subsetSum += sorted[i];
    let rest = totalSum - subsetSum;
    sortedArr.unshift(sorted[i]);

    if (subsetSum > rest) {
      return sortedArr;
    }
  }
};

console.log(greaterSumArray([3, 7, 5, 6, 2])); // 6, 7
console.log(greaterSumArray([5, 3, 2, 4, 1, 2])); // 4, 5
console.log(greaterSumArray([4, 2, 5, 1, 6])); // 5, 6
