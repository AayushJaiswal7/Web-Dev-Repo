const mongoose = require('mongoose');
main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength:20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min:[1,"price is too low for selling"],
    },
    discount:{
        type: Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String]
});
const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("67c05f5c9a478a5138a2c8f4",{price:-100},{runValidators:true}).then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err.errors);
    
});
let book1=new Book({
    title:"Marvel comics",
    // author:"RD ",
    price:20000,
    // category:"fiction",
    genre:["comic","superheros","adventure"],
});

book1.save().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
});