const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "region.json");


const getAllRegion = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
     cb(JSON.parse(fileContent));
  });
}

module.exports = class Region {
  static fetchAll(cb) {
    getAllRegion(cb)
  }
};
