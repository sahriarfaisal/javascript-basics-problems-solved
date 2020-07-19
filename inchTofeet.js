/*
//Inch to Feet convart using normal variable.
var inch = 60;
var inchTofeet = inch/12;
console.log(inchTofeet);
*/

//Inch to Feet convart using funciton.
//Function Decleration
function inchTofeet(inch)
{
    var feet = inch/12;
    return feet;
}
var allPerson = [60,120,180];
var kamalFeet = inchTofeet(allPerson[0]);
console.log("Kamal Feet = " + kamalFeet);
var jamalFeet = inchTofeet(allPerson[1]);
console.log("Jamal Feet = " + jamalFeet);
var tomalFeet = inchTofeet(allPerson[2]);
console.log("Tomal Feet = " + tomalFeet);