// // console.log("Hello World!");
// // console.log("Our Company");
// // let pencilPrice=10;
// // let eraserPrice=5;

// // console.log(`This total price is :  ${pencilPrice + eraserPrice} Rupees.`);
// // let age=18;
// // console.log(age<=18);
// // console.log(1+"2");
// let traffic = "yellow";
// if (traffic === "red") {
//     console.log(`stop`);


// } else if (traffic === "yellow") {
//     console.log(`wait`);


// } else {
//     console.log(`go ahead`);

// }
// let string = "app";
// if (string[0] === "a" && string.length > 3) {
//     console.log("Good String");

// } else {
//     console.log("bad");

// }
// let day = 0;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");     
//         break;
//     default:
//         console.log("No such Day!");
        
//         break;
// }
// //alert("This is a simple alert");// display pop up error msg on the screen
// // console.error("this is an error log"); //display error in backend
// // console.warn("this is a warning msg");
// // let firstName=prompt("enter first name:");// take user input and display in variable
// // let lastName=prompt("enter last name:")
// // console.log("Welcome",firstName,lastName,"!");
// // let msg="Welcome"+" "+firstName+" "+lastName+"!";
// // alert(msg);
// // console.log(`my name is ${firstName} ${lastName}`);

// let num=47852;
// if (num %10==2) {
//     console.log("yes");
    
// }
// // string.method() *general syntax of method
// let msg="    hello    ";
// // msg.trim();   *trim spaces from the beginning and end 
//                 //*doesnt changes the original string
// // console.log(msg);

// let password=prompt("set your password");
// console.log(password);
// password.toUpperCase();
// password.toLowerCase();
// let str="ILoveCoding";
// let oldmsg="   hello    ";
// let newMsg=oldmsg.trim().toUpperCase();
// console.log(str.slice(5));
// console.log(str.replace("Love","do"));
// let fruit="mango";
// let student=["aman","shradha","rajat"];
let cars=["audi","bmw","mercedes","maruti"];
// let primary=["red","yellow","blue"];
// let secondary=["orange","green","violet"];
// console.log(primary.concat(secondary));
// for (let index = 1; index <=20; index++) {
// console.log(index);   
// }



let guess=prompt("Guess the  movie:");
let movies="avatar";
while ((guess!==movies)) {
   if (guess==="quit") {
    console.log("you quit !");
    break;
   }
    guess=prompt("please try again");
}
// if (guess===movies) {
//     console.log("congrats! you guessed it right");
    
// }else{
//     console.log("you quit");
// }
for ( car of cars) {
console.log(car);
}
for (char of "apnacollege") {
    console.log(char);
    
}