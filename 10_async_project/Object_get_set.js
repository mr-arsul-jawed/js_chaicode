const User = {
    _email:"ars@.com",
    _pass:"abc123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
      this._pass = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
