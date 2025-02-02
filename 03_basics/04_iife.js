// // IIFE: Immediately Invoked Function Expression.

// (function chai() {

//     //named IIFE
//     console.log(`DB CONNECTED`);
    
// })(); //here: Semicolon very important when you use iife.

// //point: 1 - The function it should be executed immediately.
// //point: 2 - There is a problem due to pollution of global scope somethings the variables of global scope to remove the pollution for  use iife.

// ( (name)=>{
//     console.log(`DB CONNECTED TWO ${name}`);
// })("arsul")





//Here: only example:
(function name() {
    console.log(`hello db`);
})();

((name, details)=>{
     console.log(`Name: ${name} and  username: ${details.username} or age: ${details.age}`);
})("mrjawed",details = {
     username: "arsul1",
     age: 90
});

