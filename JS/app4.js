
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console. log ( ans);
// }
// three();

// setTimeout(()=>{
//     console.log("apna college");

// },2000);

// console.log("hello....");

let h1 = document.querySelector("h1");
// setTimeout(()=> {
//     h1.style.color="red";


// },1000);

// setTimeout(()=> {
//     h1.style.color="orange";


// },2000);
// setTimeout(()=> {
//     h1.style.color="green";


// },3000);
function changeColor(color, delay) {
  return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed")
        },delay);
    });
}
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });//callback nesting -> callback hell
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
    
});
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb(
//     "ayush jaiswal",
//     () => {
//         console.log("SUCCESS:your data was saved",);
//         savetoDb("hello world", () => {
//             console.log("SUCCESS:your data was saved",);
//             savetoDb("ayush", () => {
//                 console.log("SUCCESS:your data was saved",);
//             },
//                 () => {
//                     console.log("FAILURE:weak connection. data not saved");

//                 })

//         },

//             () => {
//                 console.log("FAILURE:weak connection. data not saved");

//             },
//         );
//     },

//     () => {
//         console.log("FAILURE:weak connection. data not saved");

//     }
// );
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {

//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success:data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }

//  savetoDb("apna college")
//     .then((result) => {
//         console.log("Result are",result);
//         console.log("data 1 saved. promise was resolved");
//         return savetoDb("hello world");//<----
//     })
//     .then((result) => {
//         console.log("Result are",result);
//         console.log("data 2 saved. promise was resolved");
//         return savetoDb("ayush jaiswal")
//     })
//     .then((result)=>{
//         console.log("Result are",result);
//         console.log("data3 saved");        
//     })
//     .catch((error) => {
//         console.log("Error are",error);
        
//         console.log("promise was rejected");
//         // console.log(request);


//     });
