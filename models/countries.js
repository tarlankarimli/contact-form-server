const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "countries.json");

module.exports = class Countries {
  static fetchAll() {
    fs.readFile(filePath, (err, fileContent) => {
      return fileContent;
    });
  }
};
