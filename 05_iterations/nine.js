const myNum = [1, 2, 3]

// const myTotal = myNum.reduce((acc, currval)=>{
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)


const myTotal = myNum.reduce((acc, curr)=> acc + curr, 0)
// console.log(myTotal);


const shoopinCart = [
    {
        itemName: "Shirt",
        price: 2000
    },
    {
        itemName: "T-Shirt",
        price: 4000
    },
    {
        itemName: "jeans",
        price: 5000
    },
]

const Price_to_pay = shoopinCart.reduce((acc, item)=> acc + item.price, 0)

console.log(Price_to_pay);

