let gameSeq=[];
let userSeq=[];
let btns=["red","blue","purple","green"];
let started=false;
let level = 0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game started");
        started=true;
        levelUp();
    }
    
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);

}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    
    
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
function checkAns(){
    // console.log("curr level :",level);
    let idx=level-1;
    if (userSeq[idx]===gameSeq[idx]) {
        console.log("same value");
        
    }else{
        h2.innerText=`Game Over! Press any key to start. `;
    }
    

}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
 checkAns();
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress)    
}