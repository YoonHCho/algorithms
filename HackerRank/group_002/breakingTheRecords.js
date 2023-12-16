// Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
      minCount++;
    } else if (scores[i] > max) {
      max = scores[i];
      maxCount++;
    }
  }
  return [maxCount, minCount];
}

console.log(breakingRecords([12, 24, 10, 24])); // 1, 1 = [max: 1, min: 1];
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // 2, 4 = [max: 2, min: 4];
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // 4, 0 =[max: 4, min: 0];
