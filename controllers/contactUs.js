const Countries = require("../models/countries");
const Industry = require("../models/industry");
const Region = require("../models/region");

exports.getCountries = (req, res, next) => {
  res.json(Countries.fetchAll())
};

exports.getIndustry = (req, res, next) => {
  res.json(Industry.fetchAll())
};

exports.getRegion = (req, res, next) => {
  res.json(Region.fetchAll())
};
