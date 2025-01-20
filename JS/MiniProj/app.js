// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("div was clicked");

// })
// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was clicked");

// })
// for (li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.append(delbtn);
    // console.log(inp.value);
    ul.appendChild(item);
    inp.value="";
    
});
// let delBtns=document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
        

//     });
    
// }
ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    console.log("delete");
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");
        
   }
    
})