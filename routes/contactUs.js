const express = require("express");

const ContactUsController = require("../controllers/contactUs");

const router = express.Router();

router.get("/countries", ContactUsController.getCountries);
router.get("/industry", ContactUsController.getIndustry);
router.get("/region", ContactUsController.getRegion);
router.post("/user-contact", ContactUsController.postUserContact);

module.exports = router;
