// ++++++++++++++++++++++ Dates +++++++++++++++++++++++++++++++++

let myDate = new Date() //here: type of object.
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2024, 0, 21)
// let myCreatedDate = new Date(2024, 0, 21, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now() // here: set the current date

// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(Math.floor(Date.now() / 1000));


// Here: Take current date
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // here give you month but here add +1 means the javascript start month on 0.
// console.log(newDate.getDay());

// Here: Customize date
let custom_date =  newDate.toLocaleString('default', {
    weekday:"long",             
    year:"numeric",
    day:"2-digit",
    // dateStyle:"full",
    // timeStyle:"full",
    // calendar: "gregory",

});

console.log(custom_date);


























