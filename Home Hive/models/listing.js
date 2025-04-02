const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    // title: {
    //     type: String,
    //     required: true,
    //   },
    //   description: String,
    //   image: {
    //       filename: String,
    //       url: String,
    //   },
    //   price: Number,
    //   location: String,
    //   country: String,
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: { type: String, default: "listingimage" },
        url: {
            type: String,
            default: "https://unsplash.com/photos/golden-gate-bridge-during-daytime-gZXx8lKAb7Y",
        },
    },
    price: Number,
    location: String,
    country: String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;