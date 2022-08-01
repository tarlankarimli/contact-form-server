const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "countries.json");

const getAllCountries = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
     cb(JSON.parse(fileContent));
  });
}
module.exports = class Countries {
  static fetchAll(cb) {
    getAllCountries(cb)
  }
};
