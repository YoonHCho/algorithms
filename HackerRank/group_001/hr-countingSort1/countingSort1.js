function countingSort(arr) {
  let newArr = Array(100).fill(0);

  for (let j = 0; j < arr.length; j++) {
    newArr[arr[j]]++;
  }

  return newArr;
}
