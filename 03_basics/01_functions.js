function sayMyName(){
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("u");
    console.log("l");
}

// sayMyName() //here: The function called just like sayMyName only then this is a refrence on not function called but when you write sayMyName() with parathesis then actual function are execute. 

//Here: notes

// function addTwoNumbers(num1, num2){ //here: num1 or num2 this is function parameters
//    console.log(num1 + num2);
   
// }

// addTwoNumbers(3, 5)  //here: 3 and 5 is arrguments.

function addTwoNumbers(number1, number2) {
    //here: First Approach
    // let result = number1 + number2
    // return result

    // here: Next Approach
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log(result);

// function loginUserMessage(username){
//     return `Welcome, ${username}`
// }


// function loginUserMessage(username = "arsul"){
//     if (!username) {
//         console.log("Please enter a username!");
//         return
//     } 
//     return `Welcome, ${username}`
// }


//Here: First Approach
// const message = loginUserMessage("Arsul")
// console.log(message);

//Here: Second Approach

// console.log(loginUserMessage("arsul jawed"));

//NOTES: here: ...num1 is rest operator and this is also called spread operator according to use case this operator change his name and work.


function calculateCartPrice(...num1) { //here: ...num1 is rest operator and this is also called spread operator according to use case this operator change his name and work.
    return num1
    
}

// console.log(calculateCartPrice(200, 400, 500, 600, 300, 150));

const user = {
    username: "Arsul Jawed",
    price: 199
}

function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
 
}

// handleObject(user)

// another approach
// handleObject({
//     username:"Mr Jawed",
//     price: 399
// })

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}



// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,5000]));






