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
const max=prompt("Enter the max number");
// console.log(max);
const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("Enter your guess");
while (true) {
    if (guess=="quit") {
        console.log("user quit");
        break;
           
    }
    if (guess==random) {
        console.log("you are right! congrats!! random number was",random);
        break;
        
    }else if(guess!=random  ){
            if(guess>random)
                guess=prompt("your guess was wrong.please try again(hint-big!try smaller)");
            if(guess<random)
        
                guess=prompt("your guess was wrong.please try again(hint-small! try big)");
            }           

        
}