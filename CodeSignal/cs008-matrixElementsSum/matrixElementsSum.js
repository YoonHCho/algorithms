function solution(matrix) {
  const toSkip = [];
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && !toSkip.includes(j)) {
        toSkip.push(j);
      } else {
        if (toSkip.includes(j)) {
          continue;
        } else {
          sum += matrix[i][j];
        }
      }
    }
  }

  return sum;
}
