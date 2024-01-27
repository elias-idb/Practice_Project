//console.log("Hello Node js world")
//For call person object
//const person = require('./person');
//console.log(person);
//console.log("My age is " + person.age);


//for call Person class and constructor

//const Person = require('./person');


//const person1 = new Person('Ali Hossain',31);
// const person2 = new Person('Jakir',30);
// const person3 = new Person('Tushar',40);
// const person4 = new Person('Sufel',35);

//person1.MyGreetingMethod();

// person2.MyGreetingMethod();
// person3.MyGreetingMethod();
// person4.MyGreetingMethod();

//Call logger 
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener',data));

logger.log('Hwllo World');