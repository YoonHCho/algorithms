/*  dataFinder function must return a function. data is an array of integers.
    Find takes in 3 arguments: min, max, value. It searches for the value (val) in the data array within the range of min and max, both inclusive.
    If min and max is out of range of data array, throws an error object with message "Invalid range"
*/

function dataFinder(data) {
  const find = (min, max, val) => {
    if (data.length - 1 < max) {
      // throw new Error("Invalid range");
      return "Error: Invalid Range";
    }

    for (let i = min; i <= max; i++) {
      if (data[i] === val) {
        return true;
      }
    }

    return false;
  };

  return find;
}

const test1 = dataFinder([1, 6, 3, 0, 2, 15, 10]);
console.log(test1(2, 4, 10)); // false
const test2 = dataFinder([15, 1, 10, 5, 4, 20]);
console.log(test2(1, 4, 4)); // true
const test3 = dataFinder([10, 1, 0, 13, 4, 15]);
console.log(test3(1, 10, 13)); // Error: Invalid range
