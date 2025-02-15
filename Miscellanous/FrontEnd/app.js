// function Person(name, age) {
//     this. name = name;
//     this.age = age;
// }
// Person.prototype.talk=function(){
//     console.log(`Hi, my name is ${this.name}`);

// const { log } = require("console");

    
// }
// let p1=new Person("adam","25");
// let p2=new Person("eva","23");
// p2.talk();
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;


    }
    talk(){
        console.log(`this is ${this.name} talking`);
        
    }
}
let p1=new Person("adam",13);
p1.talk();
class Student extends Person{
    constructor(name,age,marks){
        // this.name=name;
        // this.age=age;
        super(name,age);
        this.marks=marks;

    }
    // talk(){
    //     console.log(`hi i am ${this.name}`);
        
    // }
}
let stud1=new Student("ayub",21,77); 
console.log(`${stud1.name}`);

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;

    }
}