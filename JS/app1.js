//  const student={
//     name:"ayush",
//     age:24,
//     marks:90,
// };
// const post={
//     username:"@ayush",
//     content:"this is my #first post",
//     likes:150,
//     reposts:20,
//     tags:["@baigangang","@coding","@javascript"],
// };
// const obj={
//     1 :"a",
//     2 :"b",
//     3 :"c",
//     null :"d",
//     undefined :"e"

// };
// // Nesting Objects
// const classInfo={
//     aman:{
//         grade:"A+",
//         city:"Delhi",
//     },
//     ayush:{
//         grade:"O",
//         city:"Mumbai",
//     },
//     shradha:{
//         grade:"B+",
//         city:"Bangalore",
//     }
// };
// // Array of Objects
// const myclasss=[
//     {
//         name:"aman",
//         age:24,
//         marks:90,
//     },
//     {
//         name:"ayush",
//         age:24,
//         marks:90,
//     },
//     {
//         name:"shradha",
//         age:24,
//         marks:90,
//     },
// ];
// let a=prompt("Enter a number");
// let b=Math.floor(Math.random()*a)+1;
// console.log(b);
// const max=prompt("Enter the max number");
// console.log(max);
// const random=Math.floor(Math.random()*max)+1;
// console.log(random);

// let guess=prompt("Enter your guess");
// while (true) {
//     if (guess=="quit") {
//         console.log("user quit");
//         break;

//     }
//     if (guess==random) {
//         console.log("you are right! congrats!! random number was",random);
//         break;

//     }else if(guess!=random  ){
//             if(guess>random)
//                 guess=prompt("your guess was wrong.please try again(hint-big!try smaller)");
//             if(guess<random)

//                 guess=prompt("your guess was wrong.please try again(hint-small! try big)");
//             }           


// }
// const car = {
//     name: "koenigsegg",
//     model: "regera",
//     color: "silver",
// };
// //function funcName(){ do something} 
// function hello() {
//     console.log("hello");

// }
// hello();

// function printName(name) {
//     console.log(name);

// }
// printName("Ayush");
// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}.`);

// }
// printInfo("Ayush", 20);
// printInfo("shruti", 18);
// printInfo("sam");
// function sum(a, b) {
//     return a + b;

// }
// console.log(sum(1, sum(2, 3)));
// function isAdult(age) {
//     if (age >= 18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
//     console.log("bye bye");

// }
// {//block scope
//     let a = 24;
// }
// // console.log(a);
// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {//funstion scope cant be accessed from outside
//         console.log(x);

//     }
//     innerFunc();
// }
// function multipleGreet(func, count) {//higher order function
//     for (let i = 1; i <= count; i++) {
//         func();

//     }
// }

// let greet = function () {
//     console.log("hello");

// }

// multipleGreet(function () {console.log("namaste");}
// , 100);
const student ={
    name:"shradha",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        let avg=(this.phy+this.math+this.eng)/3;
        console.log(`${this.name} got avg marks=${avg}`);

    }
}
function getAvg() {
    console.log(this);

}
console.log("hello");
console.log("hello");
// let a=5;
try {
    console.log(a);

} catch (error) {
    console.log("error found in LINE");
    console.log(error);

}
console.log("hello");
console.log("hello");

const sum = (a, b) => {
    console.log(a + b);

}
const pow = (a, b) =>
    (a ** b);
const mul = (a, b) => (
    a * b
);
console.log("hi there!");

setTimeout(
    () => {
        console.log("Ayush Jaiswal");

    }, 5000)
    console.log("welcome to");
    console.log("welcome to");
    console.log("welcome to");
    console.log("welcome to");
    console.log("welcome to");
    console.log("welcome to");

    let id=setInterval(
        ()=>{
            console.log("Hello world");
            
        },2000
    )
    let id2=setInterval(
        ()=>{
            console.log("Ayush Jaiswal");
            
        },3000
    )
    console.log(id);
    console.log(id2);
    
    