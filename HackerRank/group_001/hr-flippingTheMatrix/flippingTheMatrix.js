function flippingMatrix(matrix) {
  // mirrored value (quadrant - please see md file) only need to run the upper right.
  const quad = matrix.length / 2;
  let maxVal;
  let sum = 0;

  for (let row = 0; row < quad; row++) {
    for (let col = 0; col < quad; col++) {
      maxVal = Number.MIN_VALUE;
      maxVal = Math.max(matrix[row][col], maxVal);
      maxVal = Math.max(matrix[row][matrix.length - col - 1], maxVal);
      maxVal = Math.max(matrix[matrix.length - row - 1][col], maxVal);
      maxVal = Math.max(matrix[matrix.length - row - 1][matrix.length - col - 1], maxVal);
      sum += maxVal;
    }
  }
  return sum;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
); // outputs 414
