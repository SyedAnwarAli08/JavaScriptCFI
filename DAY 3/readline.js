var readlineSync = require('readline-sync');
//this is used to take input from used
var a = readlineSync.question("Please enter your name : ")
//readlineSync.question is used to take string as input
var num = readlineSync.questionInt("Enter your age : ")
//questionInt is used to take int as input and if wrong input is provided
//it will ask user to type the coorect input
console.log(`Hello ${a} your age is ${num}`)
var password = readlineSync.questionNewPassword("Enter your password")
// this will not display the input at the time of typing, 
//this will show "It can include: 
//0...9, A...Z, a...z, !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
//And the length must be: 12...24" for strong password you can also change the parameters