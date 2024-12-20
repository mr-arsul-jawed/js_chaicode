//Primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 234567899876543


//Reference (Non - primitive)

//Array, Objects ,Functions

const heros = ['shaktiman', 'ironman', 'antman']

let myObj = {
    name: "arsul",
    age : 19
}

// const myfunction = function(){
//     console.log("Hello world");
    
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap  (Non-Primitive)

//Stack: the stack give me copies 

// Heap: The heap is give you original

let youtube = "arsul"

let anothername = youtube

anothername = "aashim"

// console.log(youtube);
// console.log(anothername);

let user = {
    email:"arsul@google.com",
    upi:"upi@ybl",
}

let userTwo = user;

userTwo.email = "google@gmail.com"

console.log(user.email);
console.log(userTwo.email);




