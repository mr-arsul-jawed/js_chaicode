//DOM = Document Object Model


//var c = 300

// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ",a);
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
   const username = "arsul"   
   
   function two() {
       const website = "youtube"
       console.log(username);
       
    
   }
//    console.log(website);
   two ()
}

// one()

if (true) {
   const username = "arsul"
    if (username === "arsul") {
      const website = " youtube"
      // console.log(username + website);
   }
}


// ++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++
//Here: This is function
add(5)
function add(num) {
   return num + 1
}



// Here: This is also function but some time this is expresion
addTwo(5) // When is here initializ then give me error . this is hoisting function
const addTwo = function (num) {
   return num + 2
}


