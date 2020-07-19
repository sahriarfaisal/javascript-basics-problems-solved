//normal way;
function facttorial(num)
{
    var fact = 1;
    for(var i = 1; i <= num; i++)
    {
        fact = fact * i;
    }
    return fact;
}
var result = facttorial(5);
console.log("result", result);

//recursive way
function factorialRecursive(num)
{
    if(num == 1)
    {
        return 1;
    }
    else
    {
        return num * factorialRecursive(num -1);
    }
}
var result = factorialRecursive(5);
console.log("result", result);