
function factorial(num) 
{
    let fact = 1;
    for(var i = 1; i <= num; i++)
    {
        fact = fact * i;
    } 
    return fact;
}
let result = factorial(10);
console.log(result);
