const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map((num)=>{
//     return num + 10
// })

const newNum = myNumbers
               .map((num)=> num * 10)
               .map((num)=> num - 2)
               .filter((num)=> num >= 0 && num <= 50)

console.log(newNum);

// const n = myNumbers
//             .map((num1)=> num1 * 100)
//             .map((num1)=> num1 - 200)
//             .filter((num1)=> num1>=0 && num1<=500)

// console.log(n);


