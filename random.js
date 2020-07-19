//Using Rand Function.
//using for l
var num = 2.52475;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
for(var i = 1; i<= 10; i++)
{
    var randomNum = Math.random() *5;
    var output = Math.round(randomNum);
    console.log(output);
}