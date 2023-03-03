function minimumSwaps(arr) {
  let countSwaps = 0;

  for (let currIndex = 0; currIndex < arr.length; currIndex++) {
    if (arr[currIndex] !== currIndex + 1) {
      const indexToSwap = arr.indexOf(currIndex + 1);
      const temp = arr[indexToSwap];
      arr[indexToSwap] = arr[currIndex];
      arr[currIndex] = temp;
      countSwaps++;
    }
  }

  return countSwaps;
}
