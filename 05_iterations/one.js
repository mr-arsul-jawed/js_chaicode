// for

for (let i = 0; i <= 10; i++)
{
    const element = i;
    

    if (element == 5) {
        // console.log("5 is best number");
        
    }
    //console.log(element);
}

for (let i = 1; i < 11; i++) {
    // console.log(`Outer Loop value: ${i}`);
    
    for (let j = 1; j < 11; j++) {
       //console.log(`Inner loop values: ${j}`);
    //    console.log(i + '*' + j + '=' + i*j);
    //    console.log(`${i} * ${j} = ${i*j}`);
       
       
        
    }
    
}

// console.log(element);



let myArray = ["false", "ironman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`DeTECTED 5`);
//         continue
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`DeTECTED 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}