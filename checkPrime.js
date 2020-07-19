
function isPrime(num)
{
    for(i=2; i<num; i++)
    {
        // console.log(i,num % i);
        if(num % i == 0)
        {
            return "Not a prime number";
        }
    }
    return "Your number is a prime number";
}
var result = isPrime(128);
console.log(result);

