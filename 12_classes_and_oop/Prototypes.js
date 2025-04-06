// Normal way
let myName = "arsul     "

// console.log(myName.length);
// console.log(myName.trim().length);

String.prototype.trueLength = function(){
    // console.log(`True length: ${this.trim().length}`);
    // console.log(this);
}



myName.trueLength()



let myHeroes = ["thor", "spiderman"] 

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`);
        
    }
}



Object.prototype.arsul = function(){
    console.log(`arsul is present in all objects`);
    
}

// heroPower.arsul() //true
// myHeroes.arsul() //true



Array.prototype.heyArsul = function(){
    console.log(`Arsul say hello`);
    
}

// myHeroes.heyArsul() //true
// heroPower.heyArsul() //false


// inheritance

const user = {
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeacherSupport //old syntax
}

Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)





