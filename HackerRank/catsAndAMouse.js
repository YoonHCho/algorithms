// Link: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);

  return catA < catB ? "Cat A" : catB < catA ? "Cat B" : "Mouse C";
}

console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C
console.log(catAndMouse(2, 5, 4)); // Cat B
