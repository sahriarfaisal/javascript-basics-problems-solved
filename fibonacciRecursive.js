function fibonacci(num)
{
    if(num == 0)
    {
        return 0;
    }
    if(num == 1)
    {
        return 1;
    }
    else
    {
        return fibonacci(num - 1) + fibonacci(num -2);
    }
}
var result = fibonacci(10);
console.log(result);