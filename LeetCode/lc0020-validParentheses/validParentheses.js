/**
 * @param {string} s
 * @return {boolean}
 */

// {[]} = true
// [{]} = false
// [{}]() = true
// (){}}{ = false
// [([]]) = false

var isValid = function (s) {
  let array = [];

  for (let ele of s) {
    if (ele === "(" || ele === "{" || ele === "[") {
      array.push(ele);
    }
    if (ele === ")") {
      if (array[array.length - 1] === "(") {
        array.pop();
      } else return false;
    }
    if (ele === "}") {
      if (array[array.length - 1] === "{") {
        array.pop();
      } else return false;
    }
    if (ele === "]") {
      if (array[array.length - 1] === "[") {
        array.pop();
      } else return false;
    }
  }

  return array.length === 0 ? true : false;
};

/*
  string can it iterated by 3 ways
  1. for loop
  2. for ... of for (let num of nums)
  3. forEach()  [...string].forEach() => returns undefined
*/
