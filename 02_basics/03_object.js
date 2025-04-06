// singleton
//Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: 'John',
    "full name": "arsul jawed", // here: "full name" is a property name but this is access on jsUer["full name"].
    [mySym] : "mykey1", // here symbole access is square bracket.
    age: 18,
    location: 'New York',
    email: 'john@gmail.com',
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.location);
// console.log(JsUser.email);
// console.log(JsUser["email"]); //here: when you key defined like this - "email" then you acces like this ["email"].
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySym]); // here: when you key defined like this - Symbol("key1") then you acces like this [Symbol] means in square bracket.



JsUser.email = "arsul@gmail.com"
// Object.freeze(JsUser) // here: when you use freeze function then you can't change any property of object.
JsUser.email = "chat@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //Here: this keyword is refer to JsUser object.
    
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const detail ={
//     "name":"arsul",
//     roll:"bca"
// }


// console.log(detail.name);

