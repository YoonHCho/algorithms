// Link: https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  // simplified and more efficient
  const fromStart = Math.floor(p / 2); // each flip turns 2 pages
  const fromEnd = Math.floor(n / 2) - Math.floor(p / 2); // total flip - flip to page will equal to flips from the back

  return Math.min(fromStart, fromEnd);

  /*
  const flips = Array(2).fill(0);
  let flipFromStart = 0;
  let flipFromEnd = n % 2 === 0 ? n + 1 : n;

  for (let i = flipFromStart; i < p; i++) {
    if (i === p || i + 1 === p) break;
    i++;
    flips[0]++;
  }
  for (let i = flipFromEnd; i > p; i--) {
    if (i === p || i - 1 === p) break;
    i--;
    flips[1]++;
  }

  return Math.min(...flips);
  */
}

console.log(pageCount(5, 4)); // 0
console.log(pageCount(6, 2)); // 1
