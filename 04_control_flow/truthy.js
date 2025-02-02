// const userEmail = "arsul@.ai"

// if (userEmail) {
//     console.log("yes");
    
// } else {
//     console.log("no");
    
// }

// falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", "false",  [], {}, true, 1, " ",, function(){}


//checking 
// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyobj = {}

if (Object.keys (emptyobj).length === 0 ) {
    console.log("empty object");
    
}
else{
    console.log("somethings");
    
}

// Null Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 50

// console.log(val1);

// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

