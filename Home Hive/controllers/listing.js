const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
   const allListings = await Listing.find({});
   res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewform = (req, res) => {
   res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
   let { id } = req.params;
   const listing = await Listing
      .findById(id)
      .populate({
         path: "reviews",
         populate: {
            path: "author",
         },

      })
      .populate("owner");
   if (!listing) {
      req.flash("error", "Listing you requested for doesn't existed")
      res.redirect("/listings");
   } else {
      res.render("listings/show.ejs", { listing });
   }

};

module.exports.editListing = async (req, res) => {
   let { id } = req.params;
   const listing = await Listing.findById(id);
   if (!listing) {
      req.flash("error", "Listing you requested for doesn't existed")
      res.redirect("/listings");
   } else {
      res.render("listings/edit.ejs", { listing });
   }
};

module.exports.createListing = async (req, res, next) => {
   // let{title,description}
   const newListing = new Listing(req.body.listing);
   newListing.owner = req.user._id;
   await newListing.save();
   req.flash("success", "New Listing Created!");
   res.redirect("/listings");
};

module.exports.updateListing = async (req, res) => {
   let { id } = req.params;
   let listing = await Listing.findById(id);

   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
   req.flash("success", "Listing Updated");
   res.redirect("/listings");
};

module.exports.destroyListing = async (req, res) => {
   let { id } = req.params;
   let deletedListing = await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   req.flash("success", "Listing Deleted");
   res.redirect("/listings");
};