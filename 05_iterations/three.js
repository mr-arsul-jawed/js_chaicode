// for of

// ["", "",]
// [{}, {}, {}]

// eg: 1
// Here: When you try to iterate the array then use for-of loop.
const arr = [2, 3, 0 ,5, 6, 7]

for (const val of arr) {
    // console.log(val);
}

// eg: 2
// const greeting = "hello world"

// for (const greet of greeting) {
//     if (greet == " ") {
//         console.log(`space detected ${greet}`);
//         break
//     }
//     console.log(`Each char is ${greet}`);
    
// }

// Maps
//Here: map use for unique iteration
const map = new Map()
map.set('IN', 'India')
map.set('USA','United State Of America')
map.set('fr','France')
map.set('IN', 'India')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-' ,value);
    
// }

const myObject = {
    'game1': 'NFS',
    'GAME2': 'PUBG'
}

//herE: Not iterable in object this type
// for (const [key, value] of myObject) {
//     console.log(key, ':-' ,value);
    
// }