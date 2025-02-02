// const tinderUser = new Object() // :here this is single term object. 
const tinderUser = {}  //here: this is non-dingleterom object



tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.gender = "male"

// console.log(tinderUser);



const regularUser = {
    email: "some@gmail.com",
    fullname: {
       userName:{
        firstname: "arsul",
        lastname: "jawed"
       }
    }
}

// console.log(regularUser.fullname.userName.firstname);


const obj1 = {1: "a", 2: "b", 9:"w", 10: "r"}
const obj2 = {3: "d", 5: "f", 6: "u"}
const obj4 = {11:"as", 12: "ar"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2) //here: add two object into one object using assign function.

//here: use spread funtion for add the more obhect

const obj3 = {...obj1, ...obj2, ...obj4} //here: add two object into one object using spread function this is the best way to add two object.

// console.log(obj3);

const users = [
    {
        id:1,
        email: "some@gmail.com"
    },
    {
        id:2,
        email: "thing@gmail.com"
    },
    {
        id:3,
        email: "th@gmail.com"
    },
]


users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));

const course = {
    courseNmae: "js in chai",
    price: "999",
    courseInstrictor: "arsul"
}

//course.courseInstrictor


//here: object destructuring.
const {courseInstrictor: instructor} = course

// console.log(courseInstrictor);
// console.log(instructor);







