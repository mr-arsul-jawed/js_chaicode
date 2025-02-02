// const coding = ["js","ruby","java","c++","python"] 


// const values = coding.forEach((item)=>{
//     //  console.log(item);
//      return item
     
// })

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter((num)=>{
//     return  num > 4
// })



// const newNums = []

// myNum.forEach((num)=>{
//    if (num > 4) {
//        newNums.push(num)
//    }
// })
// console.log(newNums);

//Here: in this below side we try you learn how to fetch data in database using filter.
const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non - Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non - Fiction', publish: 2002, edition: 2008},
    {title: 'Book Five', genre: 'Science', publish: 1989, edition: 2011},
    {title: 'Book Six', genre: 'Fiction', publish: 2005, edition: 2011},
    {title: 'Book Seven', genre: 'History', publish: 1987, edition: 2012},
    {title: 'Book Eight', genre: 'Science', publish: 1996, edition: 2013},
    {title: 'Book Nine', genre: 'Fiction', publish: 1988, edition: 2012},
    {title: 'Book Ten', genre: 'History', publish: 1990, edition: 2015},
];


let newset = books.filter((bk)=>{
   return bk.genre ==="Fiction"
})

console.log(newset);

// let userbooks = books.filter((bk)=>{
//  return  bk.genre === "Fiction"
// })


// userbooks = books.filter((bk)=>{
//     return bk.publish >= 1981 && bk.genre === "History"
// })

// let userbooks = books.filter((bk)=>{
//     return bk.publish >= 1981 && bk.publish <= 2005 && bk.genre === "History"
// })

// console.log(userbooks);


