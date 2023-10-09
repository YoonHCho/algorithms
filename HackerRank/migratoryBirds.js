// Link: https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
  const results = {};

  arr.forEach(prop => {
    if (!results[prop]) {
      results[prop] = 1;
    } else {
      results[prop]++;
    }
  });

  let maxKey = null;
  let maxValue = null;
  for (let key in results) {
    if (!maxKey && !maxValue) {
      maxKey = key;
      maxValue = results[key];
    }
    if (maxValue < results[key] || (key < maxKey && results[key] === maxValue)) {
      maxKey = key;
      maxValue = results[key];
    }
  }

  return maxKey;
}

console.log(migratoryBirds([1, 2, 3, 3, 4, 5])); // 3
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3
