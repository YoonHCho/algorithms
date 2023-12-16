function hourglassSum(arr) {
  let highest = [];

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      const sum =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];
      highest.push(sum);
    }
  }

  return Math.max(...highest);
}
