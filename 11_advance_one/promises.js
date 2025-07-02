
//Here: First Promise
// const promiseOne = new Promise(function (resolve, reject){
//   //Do an async task
//   // DB calls, crptography, network
//   setTimeout(function(){
//     console.log("Async task is complete");
//     resolve();
// }, 1000);
// })
// promiseOne.then(()=>{
//     console.log("Promise resolved");
// });

//Here: Second Promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is complete");
//         resolve();
//     },1000);
// }).then(()=>{
//     console.log("Promise 2 resolved");
// })

//Here: Third Promise
// const promiseThree = new Promise(function(resolve, reject){      
//    setTimeout(function(){
//     resolve({username: "Chai", email:"chai@email.com"}) 
//    },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
    
// })

//Here: Four Promise
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"arsuljawed", password:"12345"})
//         } else {
//             reject('ERROR: Somethings wents wrong!')
//         }
//     },1000);
// });

//Here: Promise Chaining means one promise is dependent on another promise.
// promiseFour.then((user)=>{      //Here: then is used to get the value of the promise.
//     console.log(user);          //Here: user is the value of the promise.
//     return user.username        //Here: return is used to pass the value to the next then block.
// }).then((username)=>{            //Here: then    is used to get the value of the promise from the previous then block.
//     console.log("User logged in"); //Here: username is the value of the promise.
// promiseFour.then((user) => {
//     // console.log(user);
//     return user.username;
    
// }).then((username)=>{//chaining the promise
//     // console.log("User logged in");
//     console.log(`${username} is logged in`);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is settled");
// });

//Here: promiseFive 

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error = false
//         if (!error) {
//             resolve({username:"Mr_Jawed", pass:"1234"})
//         } else {
//             reject("ERROR: JS went error")
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumePromiseFive()

//Here: Example for fetch
// async function user(){
//    try {
//     const response = await fetch('https://api.github.com/users/mr-arsul-jawed')
//     const data = await response.json()
//     console.log(data);
//    } catch(error){
//     console.log(error);
    
//    }
   
// }
// // user()



//Here: Important part
// fetch('https://api.github.com/users/mr-arsul-jawed')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
  
// })




// fetch('https://api.github.com/users/mr-arsul-jawed')
// .then((res)=>{
//     // console.log(res);
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
//     return data.url
// })
// .then((url)=>{
//     console.log(url);
    
// })
// .catch((error)=>{
//   console.log(error);
  
// })















