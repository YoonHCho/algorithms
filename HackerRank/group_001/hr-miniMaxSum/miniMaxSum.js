function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const totalMax = total - min;
  const totalMin = total - max;
  return console.log(totalMin + " " + totalMax);
}
