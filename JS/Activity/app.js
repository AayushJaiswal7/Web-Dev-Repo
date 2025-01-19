// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     // h3.innerText=randomColor;
//     h3.style.color=randomColor;
//     let div=document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated");

// });

//  function getRandomColor() {
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb(${red},  ${green},  ${blue})`;
//     return color;
//  }

let h1 = document.querySelector("h1");
let h3= document.querySelector("h3");
let p = document.querySelector("p");
let btn = document.querySelector("button");

// p.addEventListener("click",function(){
// console.log("para was clicked");

// })
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside div");
    
// })
// let btn =document.querySelector("button");
// btn.addEventListener("click",function(){
//  console.dir(this.innerText);
//  this .style.backgroundColor="blue";
// })
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);