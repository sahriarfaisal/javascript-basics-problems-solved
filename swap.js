//swap using temp variable.
/*
var a = 5;
var b = 7;
console.log("befor swap: a =", a , "b = ", b);
var temp = a;
 a = 7;
 b = temp;
 console.log("After swap: a =", a , "b = ", b);
 */
//swap without temp variable.
/*
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("After swap : x =",x, "Y = ",y);
*/
//Swap using destructing
var p = 5;
var q = 7;
[p , q] = [q , p];
console.log("After swap : p =",p, "q = ",q);
