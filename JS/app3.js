// let smallimages=document.getElementsByClassName("oldImg");

// for (let i = 0; i <smallimages.length; i++) {
//     smallimages[i].src="spiderman_img.png";
//     console.log(`value of image no.${i} is changed.`);
    
    
// }
console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

let links=document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color="purple";
    
// }
for(link of links){
    link.style.color="blue";
}
//document.querySelector
//name.classList.add()
//name.classList.remove()
//name.classList.toggle()
//name.classList.contains()
//name.parentElement
//name.children
//name.childElementCount
//name.children[0]
//name.children[0].previousElementSibling
//box.appendChild(newPara)
//document.createElement('button')
//newPara.append("this is new text")//append against old text
//newPara.prepend("message")
//insertAdjacent(where,element)
let para1=document.createElement("p");
para1.innerText="Hey I'm red!";
document.querySelector('body').append(para1);

para1.classList.add("red");
let h3=document.createElement("h3");
h3.innerText="Hey Im blue h3";
document.querySelector('body').append(h3);
h3.style.color="blue";

let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");
 
h1.innerText="I'm in a div";
para2.innerText="Me Too";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector('body').prepend(div);

let btns=document.querySelectorAll("button");
// btn.onclick=function(){
//   alert("button was clicked");
  
// };
for (btn of btns) {
    // btn.onclick=sayHello;//no parantesis
    // btn.onmouseenter= function(){//moving cursor over the button count
    //     console.log("you entered a button");
    // };
        // btn.addEventListener("click",sayHello);
        // btn.addEventListener("click",sayName);
        btn.addEventListener("dblclick",function(){
            console.log("you double clicked me");
            
        });

}
function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Apna College")
}