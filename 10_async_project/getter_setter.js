class User{
    constructor(email, password){
        this.email = email
        this.password  = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
       this._email = value 
    }

    get password(){
     return `${this._password}arsul`
    }

    set password(value){
        this._password = value
    }

}

const  arsul = new User("arsul@gmail.com","abc")

console.log(arsul.password);



