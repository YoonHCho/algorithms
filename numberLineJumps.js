// Link: https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  // Since, second kangaroo always starts ahead of the first, if second kangaroo jumps further than first, first will never catch up
  if (v2 > v1) return "NO";

  // using linear equation x1 + jump(v1) = x2 + jump(v2);
  let num = x2 - x1;
  let jumps = v1 - v2;
  let result = num / jumps;
  // if result is a whole number, 2 kangaroos will meet. if not, they will not meet
  return result % 1 === 0 ? "YES" : "NO";
}

console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO
