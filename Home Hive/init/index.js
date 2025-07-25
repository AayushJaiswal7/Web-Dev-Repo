const mongoose = require("mongoose");
const initData =require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/homehive");
}
const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"68708c03c8e35cc1af2fcb7b"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
}

initDB();