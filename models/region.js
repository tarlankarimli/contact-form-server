const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "region.json");

module.exports = class Region {
  static fetchAll() {
    fs.readFile(filePath, (err, fileContent) => {
        return fileContent;
    });
  }
};
