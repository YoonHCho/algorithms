/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const newArr = strs.map(ele => ele.length);
    let length = Math.min(...newArr);
    let minWord = strs[newArr.indexOf(length)];

    console.log('length: ', length);
    console.log('minWord: ', minWord);

    while (length >= 0) {
      if (true) {
        length--;
      }
    }

    console.log('OUTSIDE WHILE');
    console.log(length);

    if (true) {
      length--;
      minWord = minWord.substring(0, length);
    }

    // while (length >= 0) {
    //     let count = 0;
    //     for(let i = 0; i < strs.length; i++) {
    //         if (strs[i].includes(minWord.substring(0, length))) {
    //             count++;
    //         }
    //     }
    //     if (count === strs.length) {
    //         const index = length;
    //         length = -1;
    //         return minWord.substring(0, index);
    //     }
    // }

    console.log('length: ', length);
    console.log('minWord: ', minWord);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));