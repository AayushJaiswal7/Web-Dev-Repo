let todo=[];

let req = prompt("Please enter your request:")

while(true) {
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("-------------");
       
        for (let index = 0; index < todo.length; index++) {
         console.log(index,":",todo[index]);
         
            
        }
        console.log("-------------");
        
    }else if(req=="add"){
       let task= prompt("Enter the task you want to add: ");
       todo.push(task);
       console.log("Task added successfully");
    //    break;
    }else if(req=="delete"){
        let task= prompt("Enter the task: ");
        todo.splice(todo.indexOf(task),1);
        console.log("Task deleted successfully");
        // break;
    }else{
        console.log("Invalid request");
    }
     req = prompt("Please enter your request:")
}