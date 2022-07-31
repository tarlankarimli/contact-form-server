const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "industry.json");

module.exports = class Industry {
  static fetchAll() {
    fs.readFile(filePath, (err, fileContent) => {
        return fileContent;
    });
  }
};
