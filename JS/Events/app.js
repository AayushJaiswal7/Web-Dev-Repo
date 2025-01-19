// let btn=document.querySelector("button");

// btn.addEventListener("click",function(event){
// console.log(event);
// console.log("button clicked");

// });
// let inp=document.querySelector("input");

// inp.addEventListener("keyup",function(){
//     console.log("key was relessed");
    
// })

// inp.addEventListener("keydown",function(event){
//     console.log(event.code);//track keys 
//     console.log(event.key);
//     console.log("key was pressed");
    
// })
let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    
//     let inp=document.querySelector("input");
//     console.dir(inp);
//     console.dir(inp.value);
//     alert("form submitted");
})  
let user=document.querySelector("#user");

user.addEventListener("change",function(){// changes placed  while moving out of input
    console.log(" change event");
    console.log("final value=",this.value);
    
    

});

user.addEventListener("input",function(){// while input
    console.log("input event");
    console.log("final value=",this.value);
    
    

});