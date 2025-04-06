// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);



// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

// const chai = {
//     name:"masala chai",
//     price: 250,
//     isAvailable: true

// }


// Object.defineProperty(chai, 'price',{
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));



// Another Exmaple:

// const Details = {
//     name:"arsul",
//     _id:"arsul123",
//     isAvailable: true,

//     logMe : function(){
//        console.log(`Your are not log-in`);
//     }
// }

// console.log(Details);
// console.log(Object.getOwnPropertyDescriptor(Details, "_id"));





// Object.defineProperty(Details, "_id",{
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// // console.log(Object.getOwnPropertyDescriptor(Details, "_id"));

// for (const [key, value] of Object.entries(Details)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }

//another example

// const student = {
//     _id:"arsul@123",
//     name:"arsuljawed"
// }




// console.log(Object.getOwnPropertyDescriptor(student,"_id"));


// Object.defineProperty(student, "_id",{
//     writable: false,
//     enumerable: false,
//     configurable: false   
// })

// console.log(Object.getOwnPropertyDescriptor(student,"_id"));

// student._id = "jawed@123"

// console.log(student._id);





// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);





