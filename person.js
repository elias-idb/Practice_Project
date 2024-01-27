// const person ={
//     name:'Elias',
//     age:30
// };

// module.exports = person;



//Module Wrapper Function
// (function(exports,require,module, __filename, __dirname){

// })

console.log(__dirname,__filename);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    MyGreetingMethod(){
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}

module.exports = Person;