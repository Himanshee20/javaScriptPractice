const accountId = 123344;
let accountEmail = "himanshee.pawar@gmail.com";
var accountPass = "12345";
accountCity = "Betul";
let accountState ;
// const veriable value can not be updated
// accountId = 123; //not allowed




/*
Prefer not use var 
because of issue in block scope or functional scope

*/

accountEmail = 'abc@gmail.com';
accountPass = '121212';
accountCity = "Indore";
console.log(accountEmail);
console.table([accountEmail, accountPass,accountCity , accountState]);