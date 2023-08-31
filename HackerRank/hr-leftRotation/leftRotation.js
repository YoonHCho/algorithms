function rotateLeft(d, arr) {
  const toRotate = [];

  for (let i = 0; i < d; i++) {
    toRotate.push(arr.shift());
  }

  toRotate.forEach(num => {
    arr.push(num);
  });

  return arr;
}

// Test
const arr = [1, 2, 3, 4, 5];
const num = 2;

console.log(rotateLeft(num, arr));
