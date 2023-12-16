// Link: https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  let days = 256;
  let leapYear;

  if (year === 1918) days += 13;

  if (year >= 1700 && year <= 1917 && year % 4 === 0) leapYear = true;
  else if (year >= 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) leapYear = true;
  else leapYear = false;

  if (leapYear) {
    days = days - 31 - 29 - 31 - 30 - 31 - 30 - 31 - 31;
  } else {
    days = days - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31;
  }

  return `${days.toString().padStart(2, "0")}.09.${year}`;
}

console.log(dayOfProgrammer(2017)); // 13.09.2017
console.log(dayOfProgrammer(2016)); // 12.09.2016
console.log(dayOfProgrammer(1800)); // 12.09.1800
