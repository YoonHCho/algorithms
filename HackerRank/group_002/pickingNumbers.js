// Link: https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  const sortedArray = a.sort((a, b) => a - b);
  let final = [];

  for (let i = 0; i < sortedArray.length; i++) {
    const temp = [];
    const currentValue = sortedArray[i];
    const currentValueLastIndex = sortedArray.lastIndexOf(currentValue);
    temp.push(...Array(currentValueLastIndex - i + 1).fill(currentValue));
    const nextValue = sortedArray[currentValueLastIndex + 1];
    const nextValueLastIndex = sortedArray.lastIndexOf(nextValue);

    if (currentValue + 1 === nextValue) {
      temp.push(...Array(nextValueLastIndex - currentValueLastIndex).fill(nextValue));
      if (temp.length > final.length) {
        final = temp;
      }
      i = currentValueLastIndex;
    } else if (temp.length > final.length) {
      final = temp;
    }

    i = currentValueLastIndex;
  }

  return final.length;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // 5
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // 5
