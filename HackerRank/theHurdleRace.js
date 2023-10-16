// Link: https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  const maxHurdle = Math.max(...height);
  return k >= maxHurdle ? 0 : maxHurdle - k;
}

console.log(hurdleRace(5, 4)); // 2
console.log(hurdleRace(5, 7)); // 0
