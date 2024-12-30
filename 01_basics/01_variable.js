const accountId = 148293
let accountEmail = "arsul@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"


//accountId = 2

accountEmail = "jawed@gmail.com"
accountPassword = "112233"
accountCity = "kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])