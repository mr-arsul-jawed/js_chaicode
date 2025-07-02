//                             FIRST EXAMPLE

// const promisesOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         data = true
//         if (data) {
//             resolve({user:"arsul@12",email:"arsul@gmail.com",pass:"123",dob:"23/10/2000"})
//         } else {
//             reject("ERROR: Somethings is wrong!")
//         }
//     },1000);
// });

// promisesOne.then((Data)=>{
// //    console.log(Data);
//    return Data.email
// }).then((email)=>{
//   console.log(email);
//   if (email.includes("@")) {
//     console.log("valid email");
    
//   } else {
//     console.log("please enter the valid email!");
    
//   }
  
// }).catch((error)=>{
//   console.log(error);
  
// })


//                    SECOND EXAMPLE


// const promisesOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         data = true
//         if (data) {
//             resolve({user:"arsul@12",email:"arsul@gmail.com", pass:"123",dob:"23/10/2000"})
//         } else {
//             reject("ERROR: Somethings is wrong!")
//         }
//     },1000);
// });

// async function FilterData() {
//     const res = await promisesOne
//     console.log(res);
    
// }
// FilterData()

//                THIRD EXAMPLE

// async function DATA() {
//    const res = await fetch('https://api.github.com/users/mr-arsul-jawed')
//    const data = await res.json()
//    console.log(data);
   
// }

// DATA()

//              FOUR EXAMPLE

// fetch('https://api.github.com/users/mr-arsul-jawed')
// .then((e)=>{
// // console.log(e);
//  return e.json()
// })
// .then((res)=>{
//  console.log(res);
 
// })
// .catch((error)=>{
//  console.log(error);
 
// })






