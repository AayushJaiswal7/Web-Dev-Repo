// const math = require("./math");
// console.log(math);

// const info = require("./Fruits");
// console.log(info);

// let n=5;
// for (let index = 0; index < n; index++) {
//     console.log("hello,",index);


// }
// console.log("bye!");
// console.log(process.argv);

// let args=process.argv;

// for(let i = 2;i<args.length;i++){
// console.log("hello to",args[i]);

// }
// const figlet=require("figlet");
// figlet("Ayush Jaiswal", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

import {
  sum, PI
} from "./math.js";

// console.log(PI);
import { generate, count } from "random-words";

console.log(generate());