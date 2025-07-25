const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");
const { createReview, destroyReview } = require("../controllers/review.js");


// post Reviews route
router.post("/",    
    isLoggedIn,
    validateReview,
    wrapAsync(createReview));

// delete review route->pull operator
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
     wrapAsync(destroyReview));
module.exports = router;