// Link: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  const result = grades.map(num => {
    const round = Math.ceil(num / 5) * 5;
    const diff = round - num;

    if (diff < 3 && num >= 38) {
      return Math.ceil(num / 5) * 5;
    } else {
      return num;
    }
  });
  return result;
}

console.log(gradingStudents([84, 29, 57])); // 85, 29, 57
console.log(gradingStudents([73, 67, 38, 33])); // 75, 67, 40, 33
