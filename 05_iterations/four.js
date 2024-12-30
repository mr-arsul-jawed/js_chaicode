//Here: when you try you iterive the object the use for-in  loop.
const myObject = {
    js: "javascript",
    cpp: 'c++',
    rb: 'ruby',

}

for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
  
}


const programming = ["python", "c++", "c", " js"]

for (const key in programming) {
    // console.log(`${key} for a programming language ${programming[key]}`);
    
}


// Here: map is not iterable 
// const map = new Map()
// map.set('IN', 'India')
// map.set('USA','United State Of America')
// map.set('fr','France')
// map.set('IN', 'India')

// for (const key in map) {
//   console.log(key);
  
// }