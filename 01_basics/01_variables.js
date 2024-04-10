const accountId = 144553;
let accountEmail = "khushi19@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@hc6757.com"

accountPassword = "216536426"

accountCity = "Bangluru"

console.log(accountId);

/*
    Prefered not to use var
    beacuse of issue inblock scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])