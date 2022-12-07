function solution(inputArray) {
  return Math.max(...inputArray.slice(1).map( (element, index) => {
    return element * inputArray[index];
  }));

  // let highest = inputArray[0] * inputArray[1];
  // for (let i = 1; i < inputArray.length - 1; i++) {
  //   if (inputArray[i] * inputArray[i+1] > highest) {
  //     highest = inputArray[i] * inputArray[i+1];
  //   }
  // }

  // return highest;
}