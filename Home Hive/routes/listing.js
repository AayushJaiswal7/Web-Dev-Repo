const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js")

const listingController=require("../controllers/listing.js");

//index route
router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new", isLoggedIn, listingController.renderNewform);

//show route
router.get("/:id", wrapAsync(listingController.showListing));

//edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editListing));

//create route
router.post("/",
    validateListing,
    wrapAsync(listingController.createListing));

 //update route
router.put(
    "/:id",
    validateListing,
    isOwner,
    wrapAsync(listingController.updateListing));

//delete route
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing));

module.exports = router;