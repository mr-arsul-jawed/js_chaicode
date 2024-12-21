// ++++++++++++++++++++++ Dates +++++++++++++++++++++++++++++++++

// let myDate = new Date()
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


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(Math.floor(Date.now() / 1000));


// Here: Take current date
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// Here: Customize date
let custom_date = newDate.toLocaleString('default', {
    // weekday:"long",             
    // year:"numeric",
    // day:"2-digit",
    dateStyle:"full",
    timeStyle:"full"
})

console.log(custom_date);
















