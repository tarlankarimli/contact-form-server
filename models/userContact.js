const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");

const filePath = path.join(pathHelper, "data", "userContact.json");

const getUserContactsFromFile = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class UserContact {
  constructor({firstName, lastName, email,jobTitle,companyName, country,industry, region, termPolicy, newsletter }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
    this.country = country;
    this.industry = industry;
    this.region = region;
    this.termPolicy = termPolicy;
    this.newsletter = newsletter;
  }

  save() {
    getUserContactsFromFile((contacts) => {
      contacts.push(this);
      fs.writeFile(filePath, JSON.stringify(contacts), (err) => {
        console.log(err);
      });
    });
  }
};
