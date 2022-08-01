const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "industry.json");

const getAllIndustry = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
     cb(JSON.parse(fileContent));
  });
}
module.exports = class Industry {
  static fetchAll(cb) {
    getAllIndustry(cb)
  }
};
