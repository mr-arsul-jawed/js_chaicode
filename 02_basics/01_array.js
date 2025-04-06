//{ } - curly bracers
//[ ] - square brackets
//( ) - Parenthesis

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


// Shallow copies: when you change and update anything then it will be reflected in the original array as well.
// Deep copies: when you change and update anything then it will not be reflected in the original array.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", " ironman", "antman"]

const myArr2 = new Array(1,2,3,4,5) // Here: object
// console.log(myArr[1]);



// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)  //Here: unshift() add the number from start
// myArr.shift()    // Here: shift() add the number from last

// console.log(myArr.includes(2)); //Here: includes() check if the number is present in the array or not.
// console.log(myArr.indexOf(5)); //Here: indexOf() check the index of the number in the array.

// here: when we you  join() function then array make string array.
const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);



// slice, splice

//slice: The slice not manipulate the original array.

//splice: The splice manipulate the original array.

// const myArr3 = [0, 1, 2, 3, 4, 5]
// console.log("A ", myArr3);

// const myn1 = myArr3.slice(1, 3)
// console.log(myn1);
// console.log(myArr3);



// const myArr3 = [0, 1, 2, 3, 4, 5]


// console.log("B ", myArr3);

// const myn2 = myArr3.splice(1, 3)

// console.log("C", myArr3);
// console.log(myArr3);




