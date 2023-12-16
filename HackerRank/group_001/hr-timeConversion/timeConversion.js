function timeConversion(s) {
  let hour = s.substring(0, 2);
  const min = s.substring(3, 5);
  const sec = s.substring(6, 8);
  let amPm = s.substring(s.length - 2).toUpperCase();

  if (amPm === "AM" && hour === "12") {
    hour = "00";
  } else if (amPm === "PM" && hour !== "12") {
    hour = parseInt(hour) + 12;
  }

  return `${hour}:${min}:${sec}`;
}
