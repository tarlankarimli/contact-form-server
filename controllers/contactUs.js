const Countries = require("../models/countries");
const Industry = require("../models/industry");
const Region = require("../models/region");
const UserContact = require("../models/userContact");

exports.getCountries = (req, res, next) => {
  Countries.fetchAll(countries=> {
    res.status(200).json({data: countries})
  })
};

exports.getIndustry = (req, res, next) => {
  Industry.fetchAll(industry=> {
    res.status(200).json({data: industry})
  })
};

exports.getRegion = (req, res, next) => {
  Region.fetchAll(region=> {
    res.status(200).json({data: region})
  })
};

exports.postUserContact = async (req, res, next) => {
  const data = req.body
  const contact = new UserContact(data);
  contact.save();
  res.status(200).json()
};
