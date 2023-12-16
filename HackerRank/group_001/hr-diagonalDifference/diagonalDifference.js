function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  let counterForDiag2 = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    diag1 += arr[i][i];
    diag2 += arr[i][counterForDiag2 - i];
  }

  return Math.abs(diag1 - diag2);
}
