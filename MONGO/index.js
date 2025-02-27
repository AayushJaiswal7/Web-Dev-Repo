const mongoose = require('mongoose');
main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User=mongoose
.model("User",userSchema);
// User.findById("67c001dd6192305510291d6d")
// .then((res)=>{
//     console.log(res);

// }).catch(err =>(console.log(err)
// ));
// User.findByIdAndDelete({_id:"67bf1cb84ab0815d68cc2f7b"}, {new: true})
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// });
User.deleteMany({name:"Adam"})
.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
});
// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50}, 
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"Bruce",email:"bruce@gmail.com",age:47}
// ]).then((res)=>{
//     console.log(res);
    
// });
// const user2=new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48,

// });

// user2.save().then((res)=>{
//     console.log(res);
    
// })
// .catch((err) => {
//     console.log(err);
         
// });
