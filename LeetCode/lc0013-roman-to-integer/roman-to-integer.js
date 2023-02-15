/**
 * @param {string} s
 * @return {number} 
 */
var romanToInt = function(s) {
  let number = 0;
  s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      if(s[i+1] === 'V') {
        number += 4;
        i++;
        continue;
      } else if (s[i+1] === 'X') {
        number += 9;
        i++;
        continue;
      } else {
        number++;
      }
    }
    if (s[i] === 'V') {
      number += 5;
    }

    if (s[i] === 'X') {
      if(s[i+1] === 'L') {
        number += 40;
        i++;
        continue;
      } else if (s[i+1] === 'C') {
        number += 90;
        i++;
        continue;
      } else {
        number += 10;
      }
    }
    if (s[i] === 'L') {
      number += 50;
    }
    
    if (s[i] === 'C') {
      if(s[i+1] === 'D') {
        number += 400;
        i++;
        continue;
      } else if (s[i+1] === 'M') {
        number += 900;
        i++;
        continue;
      } else {
        number += 100;
      }
    }
    if (s[i] === 'D') {
      number += 500;
    }

    if (s[i] === 'M' && (s[i - 1] === undefined || s[i - 1] === 'M')) {
      number += 1000;
    }
  }

  return number;
};


console.log(romanToInt('MCMXCIV'));