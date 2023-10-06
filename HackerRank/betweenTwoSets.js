// Link: https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  const maxNumA = Math.max(...a);
  const minNumB = Math.min(...b);
  const evenlyWithA = [];

  // need to find values between the largest from a and lowest from b
  for (let i = maxNumA; i <= minNumB; i++) {
    // found value needs to divide evenly with all the values from array a
    if (a.every(num => i % num === 0)) evenlyWithA.push(i);
  }

  let count = 0;
  // iterate through all considered values
  for (let i = 0; i < evenlyWithA.length; i++) {
    // all the values from b, needs to divide evenly.
    if (b.every(num => num % evenlyWithA[i] === 0)) count++;
  }

  return count;
}

console.log(getTotalX([2, 6], [24, 36])); // 2
console.log(getTotalX([2, 4], [16, 32, 96])); // 3
console.log(getTotalX([3, 4], [24, 48])); // 2
