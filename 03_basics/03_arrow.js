const user = {
    username: "arsul",
    price: 99,

    welcomeMessage: function() {
       console.log(`${this.username}, welcome to website`); //Here: this refers to the user object and also this is current content.
       console.log(this);
       
    }
}

// user.welcomeMessage()
// user.username = "Mrjawed"
// user.welcomeMessage()

// console.log(this);

//HERE : NOTE (this key only work on object and this key is not  work in function)

// function chai() {
//     let username = "arsul"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username =  "jawed"
//     console.log(this.username);
    

// }



// const chai =()=>{
//     let username = "jawed"
//     console.log(this);
    
// }

// chai()

//Example: arrow function

// const addTwo=(num1, num2)=>{ //Here: this is explicit return because here you use return that's why that is called explicit return
//   return num1 + num2;
// }

// console.log(addTwo(3,5))


// const addTwo =(num1, num2)=> (num1 + num2) //Here: This is implicit return
const addTwo =(num1, num2)=> ({username: "arsul"})

// console.log(addTwo(2,4));


//Here: This is only fun code not use in real life.
// const myArray = [1,2,45,6,7]

// myArray.forEach((index, myArray)=>{
//    console.log(myArray,index);
   
// })

