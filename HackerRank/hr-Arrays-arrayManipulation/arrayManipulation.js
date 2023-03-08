function arrayManipulation(n, queries) {
  let maxVal = -99999;
  let curVal = 0;
  const arr = new Array(n).fill(0);

  for (let i = 0; i < queries.length; i++) {
    const toAdd = queries[i][2];
    arr[queries[i][0] - 1] += toAdd;
    arr[queries[i][1]] -= toAdd;
    console.log(arr);
  }

  for (let i = 0; i < arr.length; i++) {
    curVal += arr[i];
    if (curVal > maxVal) {
      maxVal = curVal;
    }
  }

  return maxVal;
}
