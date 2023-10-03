// Link: https://www.hackerrank.com/challenges/apple-and-orange/problem

const withinPoints = (point, s, t) => {
  return point >= s && point <= t;
};

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  let iterate = apples.length > oranges.length ? apples.length : oranges.length;

  for (let i = 0; i < iterate; i++) {
    if (apples[i] !== undefined) {
      const point = apples[i] + a;
      if (withinPoints(point, s, t)) appleCount++;
    }
    if (oranges[i] !== undefined) {
      const point = oranges[i] + b;
      if (withinPoints(point, s, t)) orangeCount++;
    }
  }

  return [appleCount, orangeCount];
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])); // [1, 2]
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])); // [1, 1]
