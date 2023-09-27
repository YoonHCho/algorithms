const fs = require("fs");

function readFile() {
  fs.readFile("readWrite.txt", "utf8", (err, data) => {
    if (err) console.log("ERROR");
    console.log(data);
    let cText = "";
    let cppText = "";
    let csText = "";
    const dataArray = data.split("\r\n");
    dataArray.forEach(item => {
      const itemSplit = item.split(".");
      if (itemSplit[1] === "c") {
        cText += item + "\n";
      } else if (itemSplit[1] === "cpp") {
        cppText += item + "\n";
      }
      if (itemSplit[1] === "cs") {
        csText += item + "\n";
      }
    });
    console.log("AFTER");
    fs.writeFile("c_filename_00.txt", cText, err => console.log(err));
    fs.writeFile("cpp_filename_00.txt", cppText, err => console.log(err));
    fs.writeFile("cs_filename_00.txt", csText, err => console.log(err));
  });
}

readFile();
