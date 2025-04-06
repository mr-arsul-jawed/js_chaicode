// const data = {
//     username:"arsul",
//     loginCount:8,
//     signedIn: true,
//     getUserDetails:function(){
//         // console.log("Got user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
        
        
//     }
// }
// console.log(data.username);
//console.log(data.getUserDetails());

function User(username, loginCount, isLoggedIn){
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn

   this.greeting = function() {
    console.log(`welcome ${this.username}`);
    }

   return this
}

const userOne = new User("arsul", 10, true)
const userTwo = new User("muskan", 12, true)
console.log(userOne.constructor);
// console.log(userTwo);

//step:1 When you use new keyword then create empty object and it is called instance.
//step:2 after that you use new keyword then call the construction function because of new keywords.
//step:3 then the construction function packs the all our arguments.
//step:4 all argument are injected in this and give to you in function

