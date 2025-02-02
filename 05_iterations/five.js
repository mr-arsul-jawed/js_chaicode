const coding = ["js","ruby","java","c++","python"] 


// Here: First approach
// coding.forEach( function(item){
//    console.log(item);
   
// })

//Here: Second approach
// coding.forEach((item)=>{
//    console.log(item);
   
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

//Here: in below iterate the index, array and also item.
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

const myCoding =[
    {
        languageName:"java",
        languagefilename: "java"
    },
    {
        languageName:"python",
        languagefilename: "py"
    },
    {
        languageName:"javascript",
        languagefilename: "js"
    },
]




myCoding.map((item)=>{
   console.log(`languaeName ${item.languageName}`);
   console.log(`languagefilename: ${item.languagefilename}`);
})



// myCoding.forEach((item)=>{
//    console.log(item.languageName);
//    console.log(item.languagefilename);
// })



